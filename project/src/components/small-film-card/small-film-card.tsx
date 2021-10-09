import {Film} from '../../types/film';

function SmallFilmCard(props: {film: Film}): JSX.Element {
  // const {name, previewImage} = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.film.previewImage} alt={props.film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{props.film.name}</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
