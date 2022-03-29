import React, { useState } from 'react';
import LanguageList from '../components/LanguageList';

const RootComponent = () => {
  const defaultLocale = 'en';
  const [locale, setLocale] = useState(defaultLocale);
  return (
    <LanguageList
      locale={locale}
      onChangeLocale={setLocale}
    />
  );
}
export default RootComponent;