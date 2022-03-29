import Localizer from '../utils/Localizer';

const MainMenu = ({ locale }) => {
  const intl = new Localizer(locale);
  return (
    <main>
      <button>{intl.formatMessage({ id: 'newTree' })}</button>
    </main>
  );
};
export default MainMenu;