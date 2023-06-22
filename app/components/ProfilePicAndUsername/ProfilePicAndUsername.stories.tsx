import ProfilePicAndUsername, {
  IProfilePicAndUsername,
} from './ProfilePicAndUsername'

export default {
  component: ProfilePicAndUsername,
  title: 'ProfilePicAndUsername',
}

const _ProfilePicAndUsername = (args: IProfilePicAndUsername) => (
  <ProfilePicAndUsername username='hello' url='/pikachu.png' />
)

export const Default = _ProfilePicAndUsername.bind({})
_ProfilePicAndUsername.args = {}
