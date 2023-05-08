import './styles/globals.css';
import grid from './styles/grid.module.css';
import flex from './styles/flex.module.css';
import header from './styles/header.module.css';
import footer from './styles/footer.module.scss';
import spacing from './styles/spacing.module.css';

export const metadata = {
  title: 'Sliced - Recipes',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={grid.fullWidthWithMargins}>
          <header className={`${grid.gridColumnCenter} ${header.container}`}>
            <div className={flex.flexSpaceBetween}>
              <img
                className={header.slicedLogo}
                src={'/logo-sliced.svg'}
                alt="Sliced logo"
              />
              <img
                className={header.logo}
                src={'/logo-slices.svg'}
                alt="Slices logo"
              />
            </div>
            <img className={header.furl} src={'/furl.svg'} alt="" />
          </header>
        </div>
        <div
          className={`${grid.fullWidthWithMargins} ${spacing.paddingBottom10}`}
        >
          {children}
        </div>
        <footer
          className={`${grid.fullWidthWithMargins} ${footer.wrapper}`}
        ></footer>
      </body>
    </html>
  );
}
