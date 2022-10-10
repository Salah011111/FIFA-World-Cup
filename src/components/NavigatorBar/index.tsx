/*
 * @Author: 'Salah' '2236291956@qq.com'
 * @Date: 2022-09-26 17:08:53
 * @LastEditors: 'Salah' '2236291956@qq.com'
 * @LastEditTime: 2022-09-28 16:38:10
 * @FilePath: \FIFA Wolrd Cup\src\components\NavigatorBar\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'

import './index.css'

import { useHistory } from 'react-router-dom'
import NavLogoUrl from '../../image/World_Cup_Logo.png'
import NavLogoWhiteUrl from '../../image/footerLogo-one.png'

export default function Index(props) {
  const history = useHistory()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tabIndex, settabIndex] = useState<number>(0)

  const ConnectWallet = async () => {
    try {
      const { ethereum } = window
    } catch (error) {
      alert(error)
    }
  }

  const setTab = (id, url) => {
    console.log('id ', id, 'url ', url)
    // 设置tab高亮
    // setTimeout(() => {
    //   settabIndex(id)
    // }, 500)
    // 页面跳转
    history.push(`/${url}`)
  }

  useEffect(() => {
    settabIndex(Number(props.msg))
  }, [props,tabIndex])

  return (
    <div className="nav">
      <div className="navTop">
        <div className="navLogo">
          {tabIndex !== 1 && <img src={NavLogoUrl} alt="" />}
          {tabIndex === 1 && <img src={NavLogoWhiteUrl} alt="" />}
        </div>
        <div className="navButtonblock">
          <div
            className="tabItem"
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              setTab(1, 'tournament')
            }}
            onClick={() => {
              setTab(1, 'tournament')
            }}
            style={{
              background: tabIndex === 1 ? 'linear-gradient(90deg, rgba(63,187,254,0.95), rgba(165,65,255,0.95))' : '',
            }}
          >
            <span style={{ color: tabIndex === 1 ? '#FFF' : '#333437' }}>TOURNAMENTS</span>
          </div>
          <div
            className="tabItem"
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              setTab(2, 'home')
            }}
            onClick={() => {
              setTab(2, 'home')
            }}
            style={{
              background: tabIndex === 2 ? 'linear-gradient(90deg, rgba(63,187,254,0.95), rgba(165,65,255,0.95))' : '',
            }}
          >
            <span style={{ color: tabIndex === 2 ? '#FFF' : '#333437' }}>HOME</span>
          </div>
          <div
            className="tabItem"
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              setTab(3, 'swapindex')
            }}
            onClick={() => {
              setTab(3, 'swapindex')
            }}
            style={{
              background: tabIndex === 3 ? 'linear-gradient(90deg, rgba(63,187,254,0.95), rgba(165,65,255,0.95))' : '',
            }}
          >
            <span style={{ color: tabIndex === 3 ? '#FFF' : '#333437' }}>SWAP</span>
          </div>
        </div>
        <div className="connect">
          <div className="connectButton" role="button" tabIndex={0} onKeyDown={ConnectWallet} onClick={ConnectWallet}>
            <span className="connecttext">Connect Wallet</span>
          </div>
        </div>
      </div>
      <div className="navLine" />
    </div>
  )
}
