import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import OrangeLabelSelect from '../pages/images/OrangeLabelSelect';
import logoStart from '../pages/images/logoForCardStart.png';
import logoPro from '../pages/images/logoForCardPro.png';
import logoProPlus from '../pages/images/logoForCardProPlus.png';
import Steps from '../pages/images/Steps';
import OneRuble from '../pages/images/OneRuble.svg';
import BlueSwich from '../pages/images/BlueSwich.svg';
import StartLogo from '../assets/startlogo.svg';
import FireLogo from '../assets/firelogo.svg';
// import AuthContext from '../service/AuthContext';
import axios from 'axios';
import ReviewsUsers from '../components/ReviewsUsers';
import BlockImg_x2 from '../pages/images/Dashboard_x2.png';
import SolLabelStartBsn from '../pages/images/SolLabelStartBsn';
import YellowRadarPoint from '../pages/images/YellowRadarPoint';
import CustomButton from './utilsComponents/CustomButton';
import { URL } from '../service/config';
import lowResImage from '../pages/images/imageFonStartBsn_comp.png'; // the low-res image
import highResImage from '../pages/images/imageFonStartBsn.png'; // the high-res image
import styles from '../pages/TariffsPage.module.css';
import thumbup from '../pages/images/thumbup.png';

const SelectRate = ({ redirect, isShowText }) => {

  const [selectedPeriod, setSelectedPeriod] = useState('1month');
  const [trialExpired, setTrialExpired] = useState(true);
  const [subscriptionDiscount, setSubscriptionDiscount] = useState(true)


  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };


  const currentPath = window.location.pathname;
  const [isHighResLoaded, setHighResLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = highResImage;
    img.onload = () => {
      setHighResLoaded(true);
    };
  }, [highResImage]);





  return (
    <>
      {isShowText && (
        <>
          <div className={styles.upBlockWrapper}>
            <div className={styles.leftBlock}>
              <div className={styles.imageBox}>
                <img src={thumbup} alt='thumbup' />
                <div className={styles.imageText}>
                  Спасибо
                  <br /> за регистрацию
                  <br /> в сервисе Radar!
                </div>
              </div>
              <div className={styles.downTextblock}>
                <span className={styles.downText}>
                  Желаем вам успехов и надеемся, что вы останетесь довольны
                  нашим сервисом!
                </span>
              </div>
            </div>
            <div className={styles.rightBlock}>
              <div className={styles.blockBackground}>
                <div className={styles.accessTitle}>
                  <span className={styles.activateAccess}>
                    На этой странице вы можете активировать тестовый доступ на 3
                    дня
                  </span>
                </div>
                <div className={styles.accessPrice}>
                  <div
                    className={styles.accessPeriod}
                    style={{ marginRight: '24px' }}
                  >
                    Доступ:
                    <span className={styles.accessPeriodBold}>3 дня</span>
                  </div>
                  <div className={styles.accessPeriod}>
                    Стоимость:
                    <span className={styles.accessPeriodBold}>1 ₽</span>
                  </div>
                </div>
                <div className={styles.accessButton}>
                  <button
                    onClick={() => {
                      pay(user.id, selectedPeriod, trialExpired);
                    }}
                  >
                    Активировать тестовый период за 1₽
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.infoBlockWrapper}>
            <div className={styles.infoBlockTitle}>
              Почему активация тестового периода стоит 1₽?
            </div>
            <div className={styles.infoBlockTextSimple}>
              Предоставление тестового доступа без ограничений по функционалу
              требует затрат со стороны сервиса. Поэтому мы взимаем
              символическую плату в размере 1₽ за активацию тестового периода,
              чтобы наши ресурсы расходовались только на тех продавцов, кто
              действительно заинтересован в тестировании аналитики. Оплата
              доступна всеми возможными способами и занимает не более 45 секунд.
            </div>
          </div>
        </>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '10px',
        }}
      >

        <div className='price-wrap'>
          <div className='landing-price-wrap'>
            <div className='landing-price-wrap-main'>
              <div className='landing-price-wrap-header'>
                Здесь есть всё, что нужно любому бизнесу на маркетплейсе
              </div>
              <div className='OrangeLabel'>
                <img src={BlueSwich} label='swich' />
              </div>
            </div>
            <div className='landing-price'>
              <p className='landing-price-text'>
                Это то, что подойдет
                <br />
                именно
                <span> Вам!</span>
              </p>
              <p className='landing-price-text-main'>
                Мы предлагаем один тариф,
                <br /> который даст полный доступ к<br /> нашей аналитике и ко
                всему ее функционалу!
              </p>
              <div className='landing-price-btn'>
                <p className='landing-price-btn-text'>
                  Мы дарим тестовый доступ на 3 дня <br />
                  <span> всего за</span>
                </p>
                <p className='landing-price-btn-text-mobile'>
                  Мы дарим тестовый доступ на 3 дня <br />
                  <span> всего за</span>
                </p>
                <img src={OneRuble} alt='ruble'></img>
              </div>
            </div>
          </div>

          <div className='cardsBlockMain'>
            <div className='cardPrice cardPrice_color'>
              <div className='HeadCardProPlus'>
                <div className='HeadCardProPlusMain'>
                  <div className='HeadCardProPlusMainText'>Smart</div>
                  <div className='HeadCardProPlusBestDes'>
                    <img src={logoProPlus} />
                    <div className='TextBestDes'>Лучший выбор</div>
                  </div>
                </div>
                <div className='selectPrice'>
                  {selectedPeriod === '1month' && (
                    <>
                      {subscriptionDiscount ? (
                        <>
                          <span className='priceCardOne'>
                            {!trialExpired ? '10 ₽' : '1 495 ₽'}
                          </span>
                          <span
                            style={{
                              marginLeft: '10px',
                              textDecoration: 'line-through',
                            }}
                          >
                            2 990 ₽
                          </span>
                          <span
                            style={{
                              marginLeft: '10px',
                              color: '#5329FF',
                              backgroundColor: '#5329FF1A',
                              fontWeight: '700',
                            }}
                          >
                            {!trialExpired ? '-99%' : '-50%'}
                          </span>
                          <div>За месяц</div>
                        </>
                      ) : (
                        <>
                          <span className='priceCardOne'>
                            2 990 ₽
                          </span>
                          {!trialExpired && (
                            <>
                              <span
                                style={{
                                  marginLeft: '10px',
                                  textDecoration: 'line-through',
                                }}
                              >
                                2 990 ₽
                              </span>
                              <span
                                style={{
                                  marginLeft: '10px',
                                  color: '#5329FF',
                                  backgroundColor: '#5329FF1A',
                                  fontWeight: '700',
                                }}
                              >
                                -99%
                              </span>
                            </>
                          )}
                          <div>

                          </div>
                        </>
                      )}
                    </>
                  )}
                  {selectedPeriod === '3month' && (
                    <>
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <span className='priceCardOne'>
                          4 485 ₽
                        </span>
                        <span
                          style={{
                            marginLeft: '10px',
                            textDecoration: 'line-through',
                          }}
                        >
                          8 073 ₽
                        </span>
                        <span
                          style={{
                            marginLeft: '10px',
                            color: '#5329FF',
                            backgroundColor: '#5329FF1A',
                            fontWeight: '700',
                          }}
                        >
                          -50%
                        </span>
                      </span>
                      <div>За 3 месяцев</div>
                    </>
                  )}
                  {selectedPeriod === '6month' && (
                    <>
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <span className='priceCardOne'>
                          5 382
                        </span>
                        <span
                          style={{
                            marginLeft: '10px',
                            textDecoration: 'line-through',
                          }}
                        >
                          10 764 ₽
                        </span>
                        <span
                          style={{
                            marginLeft: '10px',
                            color: '#5329FF',
                            backgroundColor: '#5329FF1A',
                            fontWeight: '700',
                          }}
                        >
                          -50%
                        </span>
                      </span>
                      <div>За 6 месяцев</div>
                    </>
                  )}
                </div>

                <button
                  className='btn-black'
                  style={{
                    minHeight: '64px',
                    fontSize: '18px',
                    marginTop: '15px',
                  }}
                >
                  Активировать сервис
                </button>
              </div>
              <div className='bodyCardProPlus'>
                <div className='labelCard'>
                  <p>Оборот селлера:</p>
                  <div style={{ fontSize: '20px', fontWeight: '500' }}>
                    Любой. Без лимитов и ограничений
                  </div>
                </div>
                <div className='labelCard'>
                  <p>Функционал</p>
                  <div style={{ fontSize: '20px', fontWeight: '500' }}>
                    Полный доступ. Без ограничений
                  </div>
                </div>
                <div className='labelCard'>
                  <p>Количество магазинов:</p>
                  <div style={{ fontSize: '20px', fontWeight: '500' }}>
                    Можно подключить одновременно до 20 магазинов
                  </div>
                </div>
                <div className='bonusProPlus'>
                  Бонус:
                  <div
                    style={{
                      fontSize: '20px',
                      fontWeight: '500',
                    }}
                  >
                    <div>
                      <Steps.CircleOkWhite />
                      <span style={{ marginLeft: '5px' }}>личный менеджер</span>
                    </div>
                    <div>
                      <Steps.CircleOkWhite />
                      <span style={{ marginLeft: '5px' }}>
                        приоритетная поддержка
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#1A1A1A08',
                padding: '5px',
                borderRadius: '10px',
                marginTop: '20px',
              }}
            >
              <button
                onClick={() => handlePeriodChange('1month')}
                className={` ${selectedPeriod === '1month' ? 'prime-btn' : 'secondary-btn'
                  }`}
                style={{
                  fontSize: window.innerWidth < 768 ? '15px' : '18px', // Динамический размер шрифта
                }}
                id='btnDop'
              >
                {selectedPeriod === '1month' ? <Steps.Circle /> : <span></span>}
                1 месяц{' '}
                <span className='saleTextMobile'>
                  -50%
                </span>
              </button>
              <button
                onClick={() => handlePeriodChange('3month')}
                className={`monthesText ${selectedPeriod === '3month' ? 'prime-btn' : 'secondary-btn'
                  }`}
                style={{
                  fontSize: window.innerWidth < 768 ? '15px' : '18px', // Динамический размер шрифта
                }}
                id='btnDop'
              >
                {selectedPeriod === '3month' ? <Steps.Circle /> : <span></span>}
                3 месяца{' '}
                <span className='saleTextMobile'>
                  -50%
                </span>
              </button>
              <button
                onClick={() => handlePeriodChange('6month')}
                className={`monthesTextBtn ${selectedPeriod === '6month' ? 'prime-btn' : 'secondary-btn'
                  }`}
                style={{
                  fontSize: window.innerWidth < 768 ? '15px' : '18px',
                }}
                id='btnDop'
              >
                {selectedPeriod === '6month' ? <Steps.Circle /> : <span></span>}
                <span>6 месяцев </span>
                <span className='saleTextMobile'>
                  -50%
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {currentPath === '/tariffs' && (
        <>
          <ReviewsUsers />
          <div
            className='wid-solutionMain'
            style={{
              backgroundImage: `url(${isHighResLoaded ? highResImage : lowResImage
                })`,
            }}
          >
            <div className='sol-description col' style={{ padding: 0 }}>
              <div className='headStartBsn'>
                <SolLabelStartBsn />
                <div className='wid-solutionMainReady'>Готовы начать?</div>
                <div className='wid-solutionMainText'>
                  Найдите прибыльные товары на маркетплейсе и развивайте свой
                  бизнес.
                </div>
                <div className='YellowRadarPoint' style={{ marginTop: '20px' }}>
                  <YellowRadarPoint />
                </div>
              </div>

              <div className='d-flex flex-column gap-3'>
                <CustomButton
                  text={'Активировать сервис'}
                  className={'white-btn'}
                />
              </div>
            </div>
            <div className='sol-screenshot sol-screenshot_bottom'>
              <img src={BlockImg_x2} alt='' />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default SelectRate;
