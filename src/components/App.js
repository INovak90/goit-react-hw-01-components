import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './friendsList/friendList';
import { TransactionHistory } from './transaction/transaction';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </Layout>
  );
};
