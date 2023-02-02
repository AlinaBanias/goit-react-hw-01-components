import PropTypes from 'prop-types';
import css from './FriendList.module.css'


export const FriendListItem = ({data: { avatar, name, isOnline }}) => {
    return <>
    <li className={css.item}>
  <span className={isOnline ? css.true : css.false}>{isOnline}</span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
</>
}

FriendListItem.propTypes = {
        friends: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
          })
        ),
      };
