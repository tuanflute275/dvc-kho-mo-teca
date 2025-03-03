import CryptoJS from 'crypto-js';

/**
 * Chuyển đổi datetime thành định dạng dd/MM/yyyy
 * @param {string | Date} dateString - Ngày cần chuyển đổi
 * @returns {string} Ngày theo định dạng dd/MM/yyyy
 */
export function formatDateTime(dateString) {
    if (!dateString) return '';

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date';

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

// Chuyển đổi ngày giờ về định dạng d/m/y h:m:s
export function formatDateTimeFull(dateString) {
    if (!dateString) return '';

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date';

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export function scrollToPosition(x = 0, y = 0) {
    window.scrollTo({
        top: y,
        left: x,
        behavior: 'smooth',
    });
}

export function capitalizeFirstLetter(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(
        () => console.log('Copied to clipboard!'),
        (err) => console.error('Failed to copy: ', err),
    );
}

export function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Kiểm tra xem số điện thoại có hợp lệ không (Việt Nam)
export function isValidPhoneNumber(phone) {
    const regex = /^(0[1-9][0-9]{8}|84[1-9][0-9]{8})$/;
    return regex.test(phone);
}

//Kiểm tra xem hai object có giống nhau không
export function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export function isNullOrEmpty(value) {
    if (
        value === null ||
        value === undefined ||
        value === '' ||
        Number.isNaN(value) // Kiểm tra NaN
    ) {
        return true;
    }

    if (Array.isArray(value)) {
        return value.length === 0;
    }

    if (typeof value === 'object') {
        if (value instanceof Date) {
            return false; // Date hợp lệ không phải object rỗng
        }
        return Object.keys(value).length === 0; // Object rỗng
    }

    return false;
}

//Lấy ngày hiện tại theo định dạng dd/MM/yyyy
export function getCurrentDate() {
    const now = new Date();
    return this.formatDateTime(now);
}

//Lấy ngày giờ hiện tại theo định dạng dd/MM/yyyy HH:mm:ss
export function getCurrentDateTime() {
    const now = new Date();
    return this.formatDateTimeFull(now);
}

export function generateRandomString(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}

export function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
}

export function jsonToFormData(json) {
    const formData = new FormData();
    Object.entries(json).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((val, index) => formData.append(`${key}[${index}]`, val));
        } else {
            formData.append(key, value);
        }
    });
    return formData;
}

export function GetValueEnviroment(key, isDecrypt = true) {
    const value = process.env[key] || '';
    if (isDecrypt) {
        return decryptCustom(value);
    }

    return value;
}

export function decryptCustom(cipherText) {
    const encryptionKey = "S6|d'qc1GG,'rx&xn0XC";
    const saltHex = '4976616e204d65647665646576';
    if (!cipherText || cipherText.trim() === '') {
        return '';
    }

    try {
        // Convert salt from hex to word array
        const salt = CryptoJS.enc.Hex.parse(saltHex);

        // Derive key and IV using PBKDF2
        const keyAndIV = CryptoJS.PBKDF2(encryptionKey, salt, {
            keySize: 48 / 4, // 48 bytes (32 bytes key + 16 bytes IV)
            iterations: 1000,
            hasher: CryptoJS.algo.SHA1,
        });

        const key = CryptoJS.lib.WordArray.create(keyAndIV.words.slice(0, 8)); // 32 bytes key
        const iv = CryptoJS.lib.WordArray.create(keyAndIV.words.slice(8, 12)); // 16 bytes IV

        // Decrypt using AES-256-CBC
        const decrypted = CryptoJS.AES.decrypt(cipherText, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });

        // Convert from WordArray to UTF-16LE (fixes extra spaces)
        const decryptedBytes = CryptoJS.enc.Utf8.stringify(decrypted);
        const decoder = new TextDecoder('utf-16le'); // Correct encoding
        const decryptedText = decoder.decode(new Uint8Array(decryptedBytes.split('').map((c) => c.charCodeAt(0))));

        return decryptedText;
    } catch (error) {
        console.error('Decryption failed:', error);
        return '';
    }
}

export function encryptCustom(plainText) {
    const encryptionKey = "S6|d'qc1GG,'rx&xn0XC";
    const saltHex = '4976616e204d65647665646576';
    if (!plainText || plainText.trim() === '') {
        return '';
    }

    try {
        // Convert salt from hex to word array
        const salt = CryptoJS.enc.Hex.parse(saltHex);

        // Derive key and IV using PBKDF2
        const keyAndIV = CryptoJS.PBKDF2(encryptionKey, salt, {
            keySize: 48 / 4, // 48 bytes (32 bytes key + 16 bytes IV)
            iterations: 1000,
            hasher: CryptoJS.algo.SHA1,
        });

        const key = CryptoJS.lib.WordArray.create(keyAndIV.words.slice(0, 8)); // 32 bytes key
        const iv = CryptoJS.lib.WordArray.create(keyAndIV.words.slice(8, 12)); // 16 bytes IV

        // Encrypt using AES-256-CBC
        const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf16LE.parse(plainText), key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });

        return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    } catch (error) {
        console.error('Encryption failed:', error);
        return '';
    }
}

export const validateFormHelper = (data, rules) => {
    let errors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;
    const numericRegex = /^\d+$/;
    const integerRegex = /^-?\d+$/;
    const floatRegex = /^-?\d+(\.\d+)?$/;
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    Object.keys(rules).forEach((field) => {
        const value = data[field]?.trim();
        const validations = rules[field];

        for (let rule of validations) {
            if (rule.required && !value) {
                errors[field] = rule.message || `${capitalize(field)} không được để trống!`;
                break;
            }

            if (rule.email && value && !emailRegex.test(value)) {
                errors[field] = rule.message || 'Email không hợp lệ!';
                break;
            }

            if (rule.minLength && value.length < rule.minLength) {
                errors[field] = rule.message || `${field} phải có ít nhất ${rule.minLength} ký tự!`;
                break;
            }

            if (rule.maxLength && value.length > rule.maxLength) {
                errors[field] = rule.message || `${field} không được vượt quá ${rule.maxLength} ký tự!`;
                break;
            }

            if (rule.pattern && !rule.pattern.test(value)) {
                errors[field] = rule.message || `${field} không hợp lệ!`;
                break;
            }

            if (rule.numeric && !numericRegex.test(value)) {
                errors[field] = rule.message || `${field} chỉ được nhập số!`;
                break;
            }

            if (rule.integer && !integerRegex.test(value)) {
                errors[field] = rule.message || `${field} phải là số nguyên!`;
                break;
            }

            if (rule.float && !floatRegex.test(value)) {
                errors[field] = rule.message || `${field} phải là số thực!`;
                break;
            }

            if (rule.positive && parseFloat(value) <= 0) {
                errors[field] = rule.message || `${field} phải là số dương!`;
                break;
            }

            if (rule.negative && parseFloat(value) >= 0) {
                errors[field] = rule.message || `${field} phải là số âm!`;
                break;
            }

            if (rule.matchField && value !== data[rule.matchField]) {
                errors[field] = rule.message || `${field} không khớp với ${rule.matchField}!`;
                break;
            }
        }
    });

    return errors;
};

/**
 * So sánh hai số thực để kiểm tra xem chúng có bằng nhau hay không, với độ chính xác cao.
 *
 * Cách hoạt động:
 * - Hàm này dùng để so sánh hai số `a` và `b`.
 * - Trong JavaScript, số dấu phẩy động (floating-point numbers) có thể gây ra lỗi chính xác khi so sánh trực tiếp bằng `===`.
 * - Thay vì so sánh trực tiếp, kiểm tra khoảng cách giữa hai số bằng `Math.abs(a - b) < Number.EPSILON`.
 * - `Number.EPSILON` là một giá trị rất nhỏ (~2.22e-16), giúp đảm bảo rằng hai số gần nhau được coi là bằng nhau.
 *
 * @param {number} a - Số thứ nhất cần so sánh.
 * @param {number} b - Số thứ hai cần so sánh.
 * @returns {boolean} - Trả về `true` nếu hai số gần như bằng nhau, ngược lại trả về `false`.
 *
 * @example
 * compareNumbers(0.1 + 0.2, 0.3); // true (vì 0.1 + 0.2 không chính xác bằng 0.3)
 * compareNumbers(5, 5.0000000001); // true (vì sự khác biệt rất nhỏ)
 * compareNumbers(5, 6); // false (vì hai số khác nhau rõ ràng)
 */
const compareNumbers = (a, b) => {
    return Math.abs(a - b) < Number.EPSILON;
};

/**
 * So sánh hai chuỗi theo thứ tự từ điển mà không phân biệt chữ hoa chữ thường.
 *
 * @param {string} a - Chuỗi thứ nhất cần so sánh.
 * @param {string} b - Chuỗi thứ hai cần so sánh.
 * @returns {boolean} - Trả về `true` nếu hai chuỗi giống nhau, ngược lại trả về `false`.
 *
 * @example
 * compareStrings("hello", "hello"); // true
 * compareStrings("Hello", "hello"); // true
 * compareStrings("apple", "banana"); // false
 */
const compareStrings = (a, b) => {
    return a.localeCompare(b) === 0;
};

/**
 * So sánh hai giá trị bất kỳ (số hoặc chuỗi).
 *
 * - Nếu cả hai là số, sử dụng `compareNumbers`.
 * - Nếu cả hai là chuỗi, sử dụng `compareStrings`.
 * - Nếu không cùng kiểu dữ liệu, trả về `false`.
 *
 * @param {string|number} a - Giá trị đầu tiên cần so sánh.
 * @param {string|number} b - Giá trị thứ hai cần so sánh.
 * @returns {boolean} - Trả về `true` nếu hai giá trị bằng nhau, ngược lại trả về `false`.
 *
 * @example
 * compareValues(0.1 + 0.2, 0.3); // true
 * compareValues("Hello", "hello"); // true
 * compareValues(5, "5"); // false
 */
export const compareValues = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return compareNumbers(a, b);
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return compareStrings(a, b);
    }
    return false;
};
