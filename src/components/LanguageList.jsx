import Link from 'next/link';
import Localizer, { localeList } from '../utils/Localizer';

const LanguageList = ({ locale, onChangeLocale }) => {
  return (
    <select 
      value={locale}
      onChange={(event) => onChangeLocale(event.target.value)}
    >
      {localeList.map((newLocale) => {
        const localizer = new Localizer(newLocale);
        return (
          <option value={newLocale} key={newLocale}>
            {localizer.formatMessage({ id: 'languageName' })}
          </option>
        );
      })}
    </select>
  );
};
export default LanguageList;

/* Sources:
https://mariestarck.com/how-to-localize-your-next-js-application-with-next-translate/
https://www.w3schools.com/html/html_form_elements.asp
https://www.delftstack.com/howto/react/react-select-onchange/
*/