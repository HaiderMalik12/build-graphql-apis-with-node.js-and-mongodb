import DataLaoder from 'dataloader';
import User from '../api/auth/user.model';
import { keyBy } from 'lodash';

async function batchOwners(ownerIds) {

    //ownerids in the form array
    //["123123213","123123123","12312312","12312312","12313"]
    console.log('no of owners has batched or convert into group ', ownerIds);
    const users = await User.find({
        _id: {
            $in: ownerIds
        }
    });
    const userByIds = keyBy(users, '_id');  // ["54545sdsd": {}, "3434342334":{}]
    console.log('users by Id:', userByIds)
    return ownerIds.map(ownerId => userByIds[ownerId]);

}
const ownerLaoder = () => {
    return new DataLaoder(ownerIds => batchOwners(ownerIds))
}
export default function () {
    return {
        owner: ownerLaoder()
    }
}