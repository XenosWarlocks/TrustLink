import HeaderBox from '@/components/header-box';
import TotalBalanceBox from '@/components/total-balance-box';
import React from 'react';

const Home = async () => {
    // const loggedIn = await getLoggedInUser();
    // const account = await getAccount({ appwriteItemId })
    const loggedIn = { firstName: ' Mannu' };
    // const account = 
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently."
                />
                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1222}
                />
            </header>
        </div>
    </section>
  )
}

export default Home;