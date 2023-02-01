import { FriendListItem } from "./FriendListItem";
import css from './FriendList.module.css'

export const FriendList = ({friendItems}) => {
    return (
    <ul className={css.friendlist}>
        {friendItems.map(item => {
        return <FriendListItem key={item.id} data={item}/>;
    })}
    </ul>
    )
}
