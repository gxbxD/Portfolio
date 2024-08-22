import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "header": {
                "contato": "Contact",
                "projetos": "Projects",
                "habilidades": "Skills",
                "certificados": "Certificates",
                "inicio": "Home"
            }
        }
    },
    pt: {
        translation: {
            "header": {
                "contato": "Contato",
                "projetos": "Projetos",
                "habilidades": "Habilidades",
                "certificados": "Certificados",
                "inicio": "Inicio"
            }
        }
    },
    de: {
        translation: {
            "header": {
                "contato": "Kontakt",
                "projetos": "Projekte",
                "habilidades": "Fähigkeiten",
                "certificados": "Zertifikate",
                "inicio": "Startseite"
            }
        }
    },
    es: {
        translation: {
            "header": {
                "contato": "Contacto",
                "projetos": "Proyectos",
                "habilidades": "Habilidades",
                "certificados": "Certificados",
                "inicio": "Inicio"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // default language
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;