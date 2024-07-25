import React, { useState, useEffect, useCallback } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { useDropzone } from 'react-dropzone';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Settings = () => {
    const navigate = useNavigate();
    const [siteLogo, setSiteLogo] = useState(null);
    const [siteFavicon, setSiteFavicon] = useState(null);
    const [companyLogo, setCompanyLogo] = useState(null);
    const [seoSettingImage, setSeoSettingImage] = useState(null);

    const [formData, setFormData] = useState({
        site_timezone: '',
        site_logo: null,
        site_favicon: null,
        site_name: '',
        site_description: '',
        site_keywords: '',
        site_meta_title: '',
        site_meta_description: '',
        site_meta_keywords: '',
        site_meta_author: '',
        company_name: '',
        company_address: '',
        company_phone: '',
        company_email: '',
        company_logo: null,
        email_setting_driver: '',
        email_setting_host: '',
        email_setting_port: '',
        email_setting_encryption: '',
        email_setting_username: '',
        email_setting_password: '',
        seo_setting_title: '',
        seo_setting_description: '',
        seo_setting_keywords: '',
        seo_setting_author: '',
        seo_setting_image: null,
        google_analytics_id: '',
        google_analytics_script: '',
        google_analytics_enable: false,
        recaptcha_key: '',
        recaptcha_secret: '',
        recaptcha_enable: false,
        social_facebook: '',
        social_twitter: '',
        social_instagram: '',
        social_youtube: '',
        social_linkedin: '',
        social_pinterest: '',
        created_at: new Date(),
        updated_at: new Date(),
    });

    useEffect(() => {
        if (localStorage.getItem('user_id') == null) {
            navigate('/login');
        }

        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/setting');
            const data = response.data;
            setFormData({
                ...formData,
                ...data,
                created_at: new Date(data.created_at),
                updated_at: new Date(data.updated_at),
            });
            setSiteLogo(data.site_logo ? `http://localhost:8000${data.site_logo}` : null);
            setSiteFavicon(data.site_favicon ? `http://localhost:8000${data.site_favicon}` : null);
            setCompanyLogo(data.company_logo ? `http://localhost:8000${data.company_logo}` : null);
            setSeoSettingImage(data.seo_setting_image ? `http://localhost:8000${data.seo_setting_image}` : null);
        } catch (error) {
            console.error('Error fetching settings:', error);
        }
    };

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleDateChange = (name, date) => {
        setFormData({
            ...formData,
            [name]: date,
        });
    };

    const onDrop = useCallback((acceptedFiles, name) => {
        setFormData({
            ...formData,
            [name]: acceptedFiles[0],
        });
        if (name === 'site_logo') {
            setSiteLogo(URL.createObjectURL(acceptedFiles[0]));
        } else if (name === 'site_favicon') {
            setSiteFavicon(URL.createObjectURL(acceptedFiles[0]));
        } else if (name === 'company_logo') {
            setCompanyLogo(URL.createObjectURL(acceptedFiles[0]));
        } else if (name === 'seo_setting_image') {
            setSeoSettingImage(URL.createObjectURL(acceptedFiles[0]));
        }
    }, [formData]);

    const { getRootProps: getLogoRootProps, getInputProps: getLogoInputProps } = useDropzone({
        onDrop: (files) => onDrop(files, 'site_logo'),
        accept: 'image/*',
    });

    const { getRootProps: getFaviconRootProps, getInputProps: getFaviconInputProps } = useDropzone({
        onDrop: (files) => onDrop(files, 'site_favicon'),
        accept: 'image/*',
    });

    const { getRootProps: getCompanyLogoRootProps, getInputProps: getCompanyLogoInputProps } = useDropzone({
        onDrop: (files) => onDrop(files, 'company_logo'),
        accept: 'image/*',
    });

    const { getRootProps: getSeoImageRootProps, getInputProps: getSeoImageInputProps } = useDropzone({
        onDrop: (files) => onDrop(files, 'seo_setting_image'),
        accept: 'image/*',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (const key in formData) {
            if (formData[key] instanceof File) {
                formDataToSend.append(key, formData[key]);
            } else if (formData[key] instanceof Date) {
                formDataToSend.append(key, formData[key].toISOString());
            } else {
                formDataToSend.append(key, formData[key]);
            }
        }
        try {
            await axios.post('http://localhost:8000/api/setting', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('Settings updated successfully');
        } catch (error) {
            console.error('Error updating settings:', error);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto my-5 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xxl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h2>Settings</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formSiteTimezone">
                            <Form.Label>Site Timezone</Form.Label>
                            <Form.Control
                                type="text"
                                name="site_timezone"
                                value={formData.site_timezone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSiteName">
                            <Form.Label>Site Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="site_name"
                                value={formData.site_name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSiteDescription">
                            <Form.Label>Site Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="site_description"
                                value={formData.site_description}
                                onChange={handleChange}
                                rows={3}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSiteKeywords">
                            <Form.Label>Site Keywords</Form.Label>
                            <Form.Control
                                type="text"
                                name="site_keywords"
                                value={formData.site_keywords}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSiteMetaTitle">
                            <Form.Label>Site Meta Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="site_meta_title"
                                value={formData.site_meta_title}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSiteMetaDescription">
                            <Form.Label>Site Meta Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="site_meta_description"
                                value={formData.site_meta_description}
                                onChange={handleChange}
                                rows={3}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSiteMetaKeywords">
                            <Form.Label>Site Meta Keywords</Form.Label>
                            <Form.Control
                                type="text"
                                name="site_meta_keywords"
                                value={formData.site_meta_keywords}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSiteMetaAuthor">
                            <Form.Label>Site Meta Author</Form.Label>
                            <Form.Control
                                type="text"
                                name="site_meta_author"
                                value={formData.site_meta_author}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSiteLogo">
                            <Form.Label>Site Logo</Form.Label>
                            <div {...getLogoRootProps({ className: 'dropzone' })}>
                                <input {...getLogoInputProps()} />
                                <p>Drag 'n' drop a file here, or click to select a file</p>
                            </div>
                            {formData.site_logo && (
                                <img
                                    src={siteLogo}
                                    alt="Site Logo"
                                    style={{ maxWidth: '100%', marginTop: '10px' }}
                                />
                            )}
                        </Form.Group>

                        <Form.Group controlId="formSiteFavicon">
                            <Form.Label>Site Favicon</Form.Label>
                            <div {...getFaviconRootProps({ className: 'dropzone' })}>
                                <input {...getFaviconInputProps()} />
                                <p>Drag 'n' drop a file here, or click to select a file</p>
                            </div>
                            {formData.site_favicon && (
                                <img
                                    src={siteFavicon}
                                    alt="Site Favicon"
                                    style={{ maxWidth: '100%', marginTop: '10px' }}
                                />
                            )}
                        </Form.Group>


                        <Form.Group controlId="formCompanyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="company_name"
                                value={formData.company_name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formCompanyAddress">
                            <Form.Label>Company Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="company_address"
                                value={formData.company_address}
                                onChange={handleChange}
                                rows={3}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formCompanyPhone">
                            <Form.Label>Company Phone</Form.Label>
                            <Form.Control
                                type="text"
                                name="company_phone"
                                value={formData.company_phone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formCompanyEmail">
                            <Form.Label>Company Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="company_email"
                                value={formData.company_email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formCompanyLogo">
                            <Form.Label>Company Logo</Form.Label>
                            <div {...getCompanyLogoRootProps({ className: 'dropzone' })}>
                                <input {...getCompanyLogoInputProps()} />
                                <p>Drag 'n' drop a file here, or click to select a file</p>
                            </div>
                            {formData.company_logo && (
                                <img
                                    src={companyLogo}
                                    alt="Company Logo"
                                    style={{ maxWidth: '100%', marginTop: '10px' }}
                                />
                            )}
                        </Form.Group>



                        <Form.Group controlId="formEmailSettingDriver">
                            <Form.Label>Email Setting Driver</Form.Label>
                            <Form.Control
                                type="text"
                                name="email_setting_driver"
                                value={formData.email_setting_driver}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmailSettingHost">
                            <Form.Label>Email Setting Host</Form.Label>
                            <Form.Control
                                type="text"
                                name="email_setting_host"
                                value={formData.email_setting_host}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmailSettingPort">
                            <Form.Label>Email Setting Port</Form.Label>
                            <Form.Control
                                type="text"
                                name="email_setting_port"
                                value={formData.email_setting_port}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmailSettingEncryption">
                            <Form.Label>Email Setting Encryption</Form.Label>
                            <Form.Control
                                type="text"
                                name="email_setting_encryption"
                                value={formData.email_setting_encryption}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmailSettingUsername">
                            <Form.Label>Email Setting Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="email_setting_username"
                                value={formData.email_setting_username}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmailSettingPassword">
                            <Form.Label>Email Setting Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="email_setting_password"
                                value={formData.email_setting_password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>



                        <Form.Group controlId="formSeoSettingTitle">
                            <Form.Label>SEO Setting Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="seo_setting_title"
                                value={formData.seo_setting_title}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSeoSettingDescription">
                            <Form.Label>SEO Setting Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="seo_setting_description"
                                value={formData.seo_setting_description}
                                onChange={handleChange}
                                rows={3}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSeoSettingKeywords">
                            <Form.Label>SEO Setting Keywords</Form.Label>
                            <Form.Control
                                type="text"
                                name="seo_setting_keywords"
                                value={formData.seo_setting_keywords}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSeoSettingAuthor">
                            <Form.Label>SEO Setting Author</Form.Label>
                            <Form.Control
                                type="text"
                                name="seo_setting_author"
                                value={formData.seo_setting_author}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSeoSettingImage">
                            <Form.Label>SEO Setting Image</Form.Label>
                            <div {...getSeoImageRootProps({ className: 'dropzone' })}>
                                <input {...getSeoImageInputProps()} />
                                <p>Drag 'n' drop a file here, or click to select a file</p>
                            </div>
                            {formData.seo_setting_image && (
                                <img
                                    src={seoSettingImage}
                                    alt="SEO Setting Image"
                                    style={{ maxWidth: '100%', marginTop: '10px' }}
                                />
                            )}
                        </Form.Group>



                        <Form.Group controlId="formGoogleAnalyticsID">
                            <Form.Label>Google Analytics ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="google_analytics_id"
                                value={formData.google_analytics_id}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formGoogleAnalyticsScript">
                            <Form.Label>Google Analytics Script</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="google_analytics_script"
                                value={formData.google_analytics_script}
                                onChange={handleChange}
                                rows={3}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formGoogleAnalyticsEnable">
                            <Form.Check
                                type="checkbox"
                                label="Enable Google Analytics"
                                name="google_analytics_enable"
                                checked={formData.google_analytics_enable}
                                onChange={handleChange}
                            />
                        </Form.Group>



                        <Form.Group controlId="formRecaptchaKey">
                            <Form.Label>Recaptcha Key</Form.Label>
                            <Form.Control
                                type="text"
                                name="recaptcha_key"
                                value={formData.recaptcha_key}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formRecaptchaSecret">
                            <Form.Label>Recaptcha Secret</Form.Label>
                            <Form.Control
                                type="text"
                                name="recaptcha_secret"
                                value={formData.recaptcha_secret}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formRecaptchaEnable">
                            <Form.Check
                                type="checkbox"
                                label="Enable Recaptcha"
                                name="recaptcha_enable"
                                checked={formData.recaptcha_enable}
                                onChange={handleChange}
                            />
                        </Form.Group>



                        <Form.Group controlId="formSocialFacebook">
                            <Form.Label>Facebook</Form.Label>
                            <Form.Control
                                type="text"
                                name="social_facebook"
                                value={formData.social_facebook}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSocialTwitter">
                            <Form.Label>Twitter</Form.Label>
                            <Form.Control
                                type="text"
                                name="social_twitter"
                                value={formData.social_twitter}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSocialInstagram">
                            <Form.Label>Instagram</Form.Label>
                            <Form.Control
                                type="text"
                                name="social_instagram"
                                value={formData.social_instagram}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSocialYouTube">
                            <Form.Label>YouTube</Form.Label>
                            <Form.Control
                                type="text"
                                name="social_youtube"
                                value={formData.social_youtube}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSocialLinkedIn">
                            <Form.Label>LinkedIn</Form.Label>
                            <Form.Control
                                type="text"
                                name="social_linkedin"
                                value={formData.social_linkedin}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSocialPinterest">
                            <Form.Label>Pinterest</Form.Label>
                            <Form.Control
                                type="text"
                                name="social_pinterest"
                                value={formData.social_pinterest}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <div className='flex justify-center mt-2 mb-10'>
                            <Button variant="primary" type="submit">
                                Save Settings
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Settings;
