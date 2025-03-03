import { Card, Flex } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useCallback, useEffect, useState } from 'react';

const TrangChu = () => {
    return (
        <>
            <div className="banner" style={{ height: '350px', background: '#ba6c6c' }}></div>
            {/* <div style={{ background: '#FFF5E1' }}>
                <div className="container list-options" style={{ padding: '30px 0' }}>
                    <Flex justify="center" gap="small">
                        <a href="/">
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    paddingTop: '15px',
                                }}
                                cover={
                                    <div className="icon-view">
                                        <img
                                            style={{
                                                width: '100px',
                                                textAlign: 'center',
                                                margin: 'auto',
                                                borderRadius: '50%',
                                            }}
                                            className="image-icon"
                                            alt="image"
                                            src="https://i.pinimg.com/564x/f3/53/df/f353df0628bbadd8d478422b7294e89b.jpg"
                                        />
                                    </div>
                                }
                            >
                                <Meta title="Dữ liệu xem nhiều nhất" />
                            </Card>
                        </a>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                paddingTop: '15px',
                            }}
                            cover={
                                <img
                                    style={{ width: '100px', textAlign: 'center', margin: 'auto' }}
                                    className="image-icon"
                                    alt="image"
                                    src="https://cdn-icons-png.flaticon.com/512/323/323319.png"
                                />
                            }
                        >
                            <Meta title="Dữ liệu xem nhiều nhất" />
                        </Card>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                paddingTop: '15px',
                            }}
                            cover={
                                <img
                                    style={{ width: '100px', textAlign: 'center', margin: 'auto' }}
                                    className="image-icon"
                                    alt="image"
                                    src="https://cdn-icons-png.flaticon.com/512/323/323319.png"
                                />
                            }
                        >
                            <Meta title="Dữ liệu xem nhiều nhất" />
                        </Card>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                paddingTop: '15px',
                            }}
                            cover={
                                <img
                                    style={{ width: '100px', textAlign: 'center', margin: 'auto' }}
                                    className="image-icon"
                                    alt="image"
                                    src="https://cdn-icons-png.flaticon.com/512/323/323319.png"
                                />
                            }
                        >
                            <Meta title="Dữ liệu xem nhiều nhất" />
                        </Card>
                    </Flex>
                </div>
            </div> */}
        </>
    );
};

export default TrangChu;
