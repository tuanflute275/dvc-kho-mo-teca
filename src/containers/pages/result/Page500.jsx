import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslate } from '~/context/LanguageContext';

const Page500 = () => {
    const navigate = useNavigate();
    const { t } = useTranslate();
    return (
        <Result
            status="500"
            title="500"
            subTitle={t("app.500Notify")}
            extra={<Button type="primary" onClick={() => { navigate(-1, { replace: true }) }}>{t('app.btnComeback')}</Button>}
        />
    );
};

export default Page500;
