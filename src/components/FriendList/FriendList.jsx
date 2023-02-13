import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";
import css from './FriendList.module.css'

export const FriendList = ({friendItems}) => {
    return (
    <ul className={css.friendlist}>
        {friendItems.map(({ id, avatar, name, isOnline })=> {
        return (<FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
        );

    })}
    </ul>
    )
}

FriendList.propTypes = {
    friendItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ),
  };