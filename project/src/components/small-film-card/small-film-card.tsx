import {Link} from 'react-router-dom';
import {Film} from '../../types/film';

function SmallFilmCard(props: {film: Film}): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.film.previewImage} alt={props.film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.film.id}`}>{props.film.name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
