import english from './locales/en.json'
import spanish from './locales/es.json'

const LANG = {
	ENGLISH: 'en',
	SPANISH: 'es',
};

export const getI18N = ({
	currentLocale = 'en',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.ENGLISH) return {...spanish, ...english};
	return spanish;
};