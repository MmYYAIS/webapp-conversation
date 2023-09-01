import type { FC } from 'react'
import React from 'react'
import { GetServerSideProps } from 'next'

const SECRET_TOKEN = process.env.token; // 这里我们从 process.env 中获取环境变量

const Home: FC = () => {
  return <div>Welcome to the protected homepage!</div>
}

export default React.memo(Home)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.query.token;

  if (token !== SECRET_TOKEN) {
    return {
      redirect: {
        destination: '/error', // 或其他错误页面
        permanent: false,
      },
    }
  }

  // 如果验证成功，返回你的页面 props
  return {
    props: {}, 
  }
}
