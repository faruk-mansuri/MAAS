import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  SignIn,
  Dashboard,
  Campaigns,
  InstaCampaigns,
  CustomerInsights,
  Loyalty,
  AutoCampaigns,
  Feedback,
  QRCode,
  Referrals,
  AddCustomers,
  Error,
  HomeLayout,
  Landing,
  SignUp,
  VerifyAccountPage,
  ResetPassword,
} from './Pages'
import ProtectedRoute from './components/ProtectedRoute'
import RedirectRoute from './components/RedirectRoute'
import { AuthProvider } from './context/AuthContext'

import { ErrorElement } from './components'
import SelectCampaign from './components/SelectCampaign'
import StartCampaign from './components/StartCampaign'
import TemplateLib from './components/TemplateLib'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute element={<HomeLayout />} />,
    errorElement: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <Landing />,
      //   errorElement: <ErrorElement />,
      // },
      {
        path: '/',
        element: <Dashboard />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/campaigns',
        element: <Campaigns />,
        errorElement: <ErrorElement />,
        children: [
          {
            index: true,
            element: <StartCampaign />,
            errorElement: <ErrorElement />,
          },
          {
            path: 'template-lib',
            element: <TemplateLib />,
            errorElement: <ErrorElement />,
          },
        ],
      },
      {
        //index: true,
        path: 'select-campaign',
        element: <SelectCampaign />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/insta-campaigns',
        element: <InstaCampaigns />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/customer-insights',
        element: <CustomerInsights />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/loyalty',
        element: <Loyalty />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/auto-campaigns',
        element: <AutoCampaigns />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/feedback',
        element: <Feedback />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/qr-code',
        element: <QRCode />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/referrals',
        element: <Referrals />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/add-customer',
        element: <AddCustomers />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: '/sign-up',
    element: <RedirectRoute element={<SignUp />} />,
    errorElement: <Error />,
  },

  {
    path: '/sign-in',
    element: <RedirectRoute element={<SignIn />} />,
    errorElement: <Error />,
  },

  {
    path: '/verify-account',
    element: <RedirectRoute element={<VerifyAccountPage />} />,
    errorElement: <Error />,
  },

  {
    path: '/reset-password',
    element: <RedirectRoute element={<ResetPassword />} />,
    errorElement: <Error />,
  },
])

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
