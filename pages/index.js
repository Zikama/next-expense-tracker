import { Inter } from '@next/font/google';
import Head from 'next/head';
import { AddTransaction } from '../components/AddTransaction';
import { Balance } from '../components/Balance';
import { Header } from '../components/Header';
import { IncomeExpenses } from '../components/IncomeExpenses';
import { TransactionList } from '../components/TransactionList';

import { GlobalProvider } from '../context/GlobalState';


export default function Home() {
  return (
    <GlobalProvider>
      <Head>
        <title>Expense tracker</title>
      </Head>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}
