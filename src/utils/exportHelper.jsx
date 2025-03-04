/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import { TYPE_CSV, TYPE_JSON, TYPE_PDF, TYPE_XLSX, TYPE_XML } from './constants';
import ExcelJS from 'exceljs';

export function exportDataToFile(data, fileType, fileName = 'data', option = {}) {
    if (!data) {
        console.error('No data provided');
        return;
    }

    if (!fileType) {
        console.error('No file type provided');
        return;
    }
    switch (fileType) {
        case TYPE_JSON:
            downloadJSON(data, fileName);
            break;
        case TYPE_XML:
            downloadXML(data, fileName);
            break;
        case TYPE_CSV:
            downloadCSV(data, fileName);
            break;
        case TYPE_XLSX:
            downloadXLSX(data, fileName, option);
            break;
        case TYPE_PDF:
            downloadPDF(data, fileName);
            break;

        default:
            break;
    }
}

function downloadJSON(data, fileName) {
    const jsonData = new Blob([JSON.stringify(data)], {
        type: 'application/json',
    });
    const jsonURL = URL.createObjectURL(jsonData);
    const link = document.createElement('a');
    link.href = jsonURL;
    link.download = `${fileName}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadXML(data, fileName) {
    const content = `<?xml version="1.0" encoding="utf-8"?><!DOCTYPE root>
    ${convertXML(data, 'root')}
    `;

    const dataStr = 'data:text/application/xml;charset=utf-8,' + encodeURIComponent(content);
    const link = document.createElement('a');
    link.href = dataStr;
    link.download = `${fileName}.xml`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function convertXML(data, tagName, arrayElementTag = 'element', spaces = 0) {
    const tag = tagName
        .replace(/[^_a-zA-Z 0-9:\-\.]/g, '')
        .replace(/^([ 0-9-:\-\.]|(xml))+/i, '')
        .replace(/ +/g, '-');

    const indentSpaces = Array(spaces + 1).join(' ');

    if (data === null || data === undefined) {
        return `${indentSpaces}<${tag} />`;
    }

    const content =
        Object.prototype.toString.call(data) === '[object Array]'
            ? data.map((item) => convertXML(item, arrayElementTag, arrayElementTag, spaces + 2)).join('\n')
            : typeof data === 'object'
            ? Object.keys(data)
                  .map((key) => [key, data[key]])
                  .map(([key, value]) => convertXML(value, key, arrayElementTag, spaces + 2))
                  .join('\n')
            : indentSpaces +
              '  ' +
              String(data).replace(/([<>&])/g, (_, $1) => {
                  switch ($1) {
                      case '<':
                          return '&lt;';
                      case '>':
                          return '&gt;';
                      case '&':
                          return '&amp;';
                      default:
                          return '';
                  }
              });

    const contentWithWrapper = `${indentSpaces}<${tag}>
            ${content}
            ${indentSpaces}</${tag}>`;

    return contentWithWrapper;
}

function downloadCSV(data, fileName) {
    const csvData = new Blob([convertToCSV(data)], { type: 'text/csv' });
    const csvURL = URL.createObjectURL(csvData);
    const link = document.createElement('a');
    link.href = csvURL;
    link.download = `${fileName}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const convertToCSV = (objArray) => {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    const headers = Object.keys(array[0]).join(',') + '\r\n';
    const rows = array.map((obj) => Object.values(obj).join(',')).join('\r\n');
    return headers + rows;
};

const downloadXLSX = async (data, fileName, option = {}) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    // Lấy headers từ data nếu không được cung cấp
    const headers = option.headers || Object.keys(data[0] || {});
    const headerMap = {
        STT: 'id',
        Tên: 'name',
        'Trạng Thái': 'status',
    };

    // Thêm hàng tiêu đề
    //worksheet.addRow(headerMap);
    worksheet.addRow(headers);

    // Thêm dữ liệu
    data.forEach((item) => {
        const row = headers.map((header) => item[header] || '');
        worksheet.addRow(row);
    });

    // Căn chỉnh độ rộng và style cho từng cột từ option.headerColumn
    headers.forEach((header, index) => {
        const column = worksheet.getColumn(index + 1);

        // Đặt độ rộng cột từ option.headerColumn hoặc mặc định
        column.width =
            option.headerColumn?.[header]?.width ||
            Math.max(header.length, ...data.map((row) => String(row[header]).length)) + 5; // Thêm khoảng trống để giãn cách

        // Đặt style cho cột từ option.headerColumn
        if (option.headerColumn?.[header]?.alignment) {
            column.eachCell((cell) => {
                cell.alignment = option.headerColumn[header].alignment;
            });
        }
    });

    // Thêm style cho hàng tiêu đề từ option.headerStyle
    const headerRow = worksheet.getRow(1);
    headerRow.eachCell((cell) => {
        cell.font = {
            bold: option.headerStyle?.bold || true, // Mặc định in đậm
            color: { argb: option.headerStyle?.fontColor || 'FFFFFFFF' }, // Màu chữ mặc định là trắng
        };
        cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: option.headerStyle?.backgroundColor || 'FF4F81BD' }, // Màu nền mặc định là xanh
        };
        cell.alignment = option.headerStyle?.alignment || {
            vertical: 'middle',
            horizontal: 'center',
        };
    });

    // Thêm style cho các ô dữ liệu
    for (let i = 2; i <= data.length + 1; i++) {
        const row = worksheet.getRow(i);
        row.eachCell((cell) => {
            cell.alignment = { vertical: 'middle', horizontal: 'left' };
        });
    }

    // Xuất file Excel
    const buffer = await workbook.xlsx.writeBuffer();

    // Tạo Blob từ buffer và tải file
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.xlsx`;
    link.click();
    URL.revokeObjectURL(url);
};

function downloadPDF(data, fileName) {}
