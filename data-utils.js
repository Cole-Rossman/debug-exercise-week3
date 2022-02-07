
export function addFriend(friends, name) {
    const newFriend = {
        name: name || `Friend #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };
    
    friends.push(newFriend);
}

export default function findFriendByName(name, friends) {
    const friend = '';
    for (friend of friends) {
        if (friend.name = name) {
            // return friend;
        }
    }
  
    return friend;
}