import { AuthContext } from '../../context/Auth';
import ThemedDiv from '../Theme/ThemedDiv';

export default function Footer() {
  return(
    <ThemedDiv>
      <AuthContext.Consumer>
        {(context) => (
          <div>
            Contact me at: {context.email}
          </div>
        )}
      </AuthContext.Consumer>
    </ThemedDiv>
  )
}