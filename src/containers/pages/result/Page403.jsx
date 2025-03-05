import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslate } from '~/context/LanguageContext';

const Page403 = () => {
    const navigate = useNavigate();
    const { t } = useTranslate();
    return (
        <>
            <Result
                status="403"
                title="403"
                subTitle={t("app.403Notify")}
                extra={<Button type="primary" onClick={() => { navigate(-1) }}>{t('app.btnComeback')}</Button>}
            />
        </>
    );
};

export default Page403;
