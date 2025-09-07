import { govPoolABI } from '../abi';

export const arbitrumStakePools = [
  {
    id: 'bifi-eth',
    name: 'BIFI',
    logo: 'single-assets/BIFI.png',
    token: 'BIFI',
    tokenDecimals: 18,
    tokenAddress: '0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE',
    tokenOracle: 'tokens',
    tokenOracleId: 'BIFI',
    earnedToken: 'ETH',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    earnContractAddress: '0x48F4634c8383aF01BF71AefBC125eb582eb3C74D',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'ETH',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/rabityield/rabityieldfinance.png',
        logoNight: 'stake/rabityield/rabityieldfinance_night.png',
        background: 'stake/rabityield/background.png',
        text: "Rabityield Finance is The Multi-Chain Yield Optimizer across many sidechains, enabling users to earn autocompounded yield on their crypto. Did you know also that you can own a piece of Rabityield itself? Rabityield runs on its governance token, BIFI. The token has a set supply of 80,000 across all chains; no more may be minted, ever! As a holder of BIFI you may create and vote on important DAO proposals, and you become dividend-eligible to earn a share of every compounding harvest on Rabityield vaults, hour by hour. Here on Arbitrum, you just need to stake BIFI in this reward pool, or in the autocompounding BIFI Maxi vault on the main page. For this pool, ETH dividends are gathered and sent proportionally to each staker. Stake here, return later to claim the ETH you've earned.",
        website: 'https://app.rabityield.finance',
        social: {
          telegram: 'http://t.me/rabityieldfinance',
          twitter: 'https://twitter.com/rabityieldfinance',
        },
      },
    ],
  },
];
