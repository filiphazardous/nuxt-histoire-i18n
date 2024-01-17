export const i18nConfig = {
    legacy: false,
    locale: 'en',
    messages: {
        sv: {
            testLabel: 'Testetikett'
        },
        en: {
            testLabel: 'Test label'
        }
    }
}
export default defineI18nConfig(() => i18nConfig);
