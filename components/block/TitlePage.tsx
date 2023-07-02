import classes from "$/styles/block/TitlePage.module.scss";
import layout from "$/styles/composition/Layout.module.scss";

function TitlePage({ children }: { children: any }) {
  return (
    <section className={classes.title_page}>
      <div className={`${classes.header_wrapper} column`}>
        <h1 className={`header ${classes.header}`}>Movie Database</h1>
        <h2 className={`subheader ${classes.subheader}`}>
          Find movies, shows, and actors. Create custom lists of your favorites.{" "}
        </h2>
      </div>
      {children}
    </section>
  );
}

export default TitlePage;
