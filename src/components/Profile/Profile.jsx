import css from './Profile.module.css';
const Profile = ({ title, name, tag, location, image, stats }) => {
  console.log(stats);

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h2>{title}</h2>
        <img className={css.image} src={image} alt="User avatar" />

        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}l</p>
      </div>

      <ul className={css.form}>
        <li className={css.list}>
          <span className={css.title}>Followers</span>
          <span className={css.item}>{stats.followers}</span>
        </li>
        <li className={css.list}>
          <span className={css.title}>Views</span>
          <span className={css.item}>{stats.views}</span>
        </li>
        <li className={css.list}>
          <span className={css.title}>Likes</span>
          <span className={css.item}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
