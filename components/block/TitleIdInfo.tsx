import { TitleInfo } from "$/types/titleInfo";
import { useEffect } from "react";
import { convertSeconds } from "$/utils/helpers";
import { likeButtonSvg } from "$/constants";

import classes from "$/styles/block/TitleIdInfo.module.scss";
import { useAuth } from "$/state/AppContextWrapper";

function TitleIdInfo({ titleInfo }: { titleInfo: TitleInfo }) {
  const { user, setUser } = useAuth();

  if (user && user.favorites) {
    const {
      id,
      genres,
      plot,
      primaryImage,
      releaseDate,
      releaseYear,
      runtime,
      titleText,
    } = titleInfo;

    const handleAddFavorite = () => {
      setUser((current: any) => ({
        ...current,
        favorites: [...current.favorites, id],
      }));
    };

    // useEffect(() => {
    //   console.log("favorites updated", user.favorites);
    // }, [favorites]);

    return (
      <div className={classes.titleIdInfoContainer}>
        {primaryImage ? (
          <div className={classes.imageWrapper}>
            <img src={primaryImage.url} alt="movie cover" />
          </div>
        ) : (
          false
        )}
        <div className={classes.infoContainer}>
          <section className="main-info-wrapper">
            <h1 className="header">
              {titleText.text} {releaseYear && `(${releaseYear.year})`}
            </h1>
            <div className={classes.mainInfo}>
              <p className="release-date">
                {releaseDate &&
                  `${releaseDate.month}/${releaseDate.day}/${releaseDate.year}`}
              </p>
              {genres &&
                genres.length > 0 &&
                genres.map((genre) => {
                  return <p className="genre">{genre.text}</p>;
                })}
              <p className="runtime">
                {runtime && convertSeconds(runtime.seconds)}
              </p>
            </div>
          </section>
          <section className={classes.iconsWrapper}>
            {/* <div className="rating"></div> */}
            <div
              className={classes.iconWrapper}
              onClick={() => handleAddFavorite()}
            >
              <img src={likeButtonSvg} alt="favorite icon" />
            </div>
          </section>
          <section className={classes.extendedInfoWrapper}>
            {plot ? (
              <>
                <h2 className="subheader">Overview</h2>
                <p className="plot">{plot.plotText.plainText}</p>
              </>
            ) : (
              <p className="plot">No additonal info 🤷‍♂️</p>
            )}
          </section>
        </div>
      </div>
    );
  }

  return <div className=""> Loading... or no favorites...?</div>;
}

export default TitleIdInfo;
