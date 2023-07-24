/* eslint-disable no-useless-escape */
import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = [
  {
    kudosImageLink: '/badges/badge-celebrate.png',
    lessonImageLink: '/courses/course-wallet.png',
    socialImageLink: '/lesson/wallet-basics/social-230cc260.jpg',
    learningActions: 'Create and manage your own wallet\nConnect your wallet to a web3 website',
    marketingDescription: 'A crypto wallet is essential gear for Web3 and DeFi. Get basic training on how a wallet works and how to get started.',
    kudosId: 2561,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Securely create and manage your first cryptocurrency wallet.',
    name: 'Create Your Crypto Wallet',
    quest: 'WalletBasics',
    publicationStatus: 'publish',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '98405bd0f2b94bb2a3079eed504a011e',
    slug: 'wallet-basics',
    imageLinks: [
      '/lesson/wallet-basics/wallet-intro-7b45d75e.png',
      '/lesson/wallet-basics/wallet-definition-e8f8f9a8.svg',
      '/lesson/wallet-basics/recovery-phrase-c2d8fa26.svg',
      '/lesson/wallet-basics/public-key-b6387071.svg',
      '/lesson/wallet-basics/private-key-ca271641.svg',
      '/lesson/wallet-basics/custodial-wallet-29ed2b65.svg',
      '/lesson/wallet-basics/non-custodial-wallet-aee2708b.svg',
      '/lesson/wallet-basics/hot-wallet-1d444d7c.svg',
      '/lesson/wallet-basics/cold-wallet-59646edb.svg',
      '/lesson/wallet-basics/metamask-wallet-521de184.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '0bf15ec24615455b9349774527410d81',
        title: 'What is a wallet?',
        content: '<div class="bloc1"><p><strong>Greetings!</strong></p><p>Welcome to the Web3 academy. We are excited to guide you on your journey to <code>Web3</code>. To begin, you will need an essential piece of equipment: a digital wallet.</p><p>A digital wallet is your passport to explore the various worlds of Web3. This tool allows you to access incredible new possibilities while protecting your assets and identity.</p><p>In this lesson, we will introduce you to digital wallets, how they work and how to set up yours to safely embark on your Web3 journey.</p><p>Let\'s get started!</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/wallet-intro-7b45d75e.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'baf157b016ba48a890eb4cacb4b903e5',
        title: 'Wallet',
        content: '<div class="bloc1"><p>In the world of cryptocurrencies, a wallet refers to an application or device that you can use to interact with a <code>blockchain</code>.</p><p>Your <code>wallet</code> acts like a safety deposit box protecting your access to the blockchain.</p><p>When your wallet is connected to a blockchain, you can make purchases, transfer digital assets, interact with applications and more.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/wallet-definition-e8f8f9a8.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '100f6d3d7cd542889814cf17733e9960',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is a wallet?',
          rightAnswerNumber: 4,
          answers: [
            'A device equipped with RFID technology',
            'A bi-fold wallet device with velcro closure',
            'An account that protects my assets',
            'An application or device used to interact with a blockchain'
          ],
          id: 'wallet-basics-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'f764c92b0620495981b32bd34dd1fc62',
        title: 'Recovery Phrase',
        content: '<div class="bloc1"><p>When you set up a new <code>wallet</code>, the software generates a unique <code>recovery phrase</code> that is specific to that wallet account.</p><p>Also sometimes called a <em>seed phrase</em> or <em>secret recovery phrase</em>, your recovery phrase can be used to access your wallet and crypto assets if:</p><ul><li>Your wallet app or hardware unexpectedly fails or is damaged.</li><li>You cannot access it due to misplacement or theft.</li><li>You want to access your wallet account through the wallet app on a different computer or device.</li></ul><p>Most recovery phrases are a list of 12 to 24 words representing a unique piece of data. That information is used to generate your wallet\'s <code>public key</code> and <code>private key</code>.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/recovery-phrase-c2d8fa26.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9d0454d30e60454397b0926523f7e73c',
        title: 'Knowledge Check',
        quiz: {
          question: 'What can you do with your recovery phrase?',
          rightAnswerNumber: 3,
          answers: [
          '[A] Recover your wallet if it is lost, stolen, or damaged',
          '[B] Access your wallet on multiple devices',
          '[C] Both options A and B',
          '[D] None of the above'
          ],
          id: 'wallet-basics-2'
          }
      },
      {
        type: 'LEARN',
        notionId: 'bf1bf37ca61845c5a4257cbaeff0e13c',
        title: 'Public Key',
        content: '<div class="bloc1"><p>You just learned how your <code>recovery phrase</code> relates to a <code>public key</code> and <code>private key</code>.</p><p>Keep in mind that a wallet can contain multiple accounts, and <em>each account</em> has a unique pair of public and private keys.</p><p>Imagine a public key as your home address. It is public, anyone can see it, and it identifies the location to send crypto assets to.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/public-key-b6387071.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a6dab3c7c04949baa0c5448f57c91cfe',
        title: 'Private Key',
        content: '<div class="bloc1"><p>If your <code>public key</code> is like your home address, then your <code>private key</code> is like your house key.</p><p>It is called private because <em>only you</em> should have access to it.</p><p>The private key unlocks access to your wallet and your crypto assets, allowing you to send them to other wallet addresses.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/private-key-ca271641.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4997e321e0814dd2931dd21c664533d6',
        title: 'Knowledge Check',
        quiz: {
          question: 'Your public key is like your _____ and your private key is like your _____',
          rightAnswerNumber: 2,
          answers: [
            'Routing number / account number',
            'Home address / house key',
            'Address / Zip code',
            'Phone number / Social Security number'
          ],
          id: 'wallet-basics-3'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a92f95a2da2a4429942b6aad2a260e1b',
        title: 'Custodial Wallet',
        content: '<div class="bloc1"><p>Since your <code>private key</code> unlocks access to your <code>wallet</code>, keeping it private and secure is very important.</p><p>Not all wallets allow you to control your private key. With a <code>custodial wallet</code>, another party controls it. Coinbase and Kraken are examples of custodial wallets that hold your private key.</p><p>This might be all some people need, but it requires that you trust third parties to secure your crypto assets and give you access when you want to trade or send them somewhere else. Also, your access to the world of <code>DeFi</code> apps will be limited.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/custodial-wallet-0538644f.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '39f830da64fb47608592eff742239223',
        title: 'Knowledge Check',
        quiz: {
          question: 'Do you control your private key with a custodial wallet?',
          rightAnswerNumber: 2,
          answers: [
            'Yes',
            'No'
          ],
          id: 'wallet-basics-4'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a78db356b36c4bb19a85af61170b2471',
        title: 'Non-custodial Wallet',
        content: '<div class="bloc1"><p>Your passport to the exciting worlds of <code>DeFi</code> and <code>Web3</code> - and the best way to protect your <code>private key</code> is with a <code>non-custodial wallet</code>.</p><p>Remember: if you lose your private key, you won\'t be able to access your wallet to spend, withdraw or transfer your crypto assets.</p><p>Fortunately, you can still recover your wallet with your <code>recovery phrase</code>. But if you also lose that, you will lose access to your wallet FOREVER!</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/non-custodial-wallet-aee2708b.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e331357c6b07425c8451d2a81c20f885',
        title: 'Knowledge Check',
        quiz: {
          question: 'Are you responsible for your private key with a non-custodial wallet?',
          rightAnswerNumber: 1,
          answers: [
            'Yes',
            'No'
          ],
          id: 'wallet-basics-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '266abc84862f425bab294dc99dfddb04',
        title: 'Wallet Security',
        content: '<div class="bloc1"><h2>ALWAYS do the following to protect your recovery phrase:</h2><p>✅ write your phrase on paper</p><p>✅ use durable material (like laminated paper or engraved metal)</p><p>✅ store it in a safe place</p><h2>NEVER do the following to protect your recovery phrase:</h2><p>🛑 store your recovery phrase in an online storage service</p><p>🛑 take a screenshot of your private key</p><p>🛑 reveal your recovery phrase to anyone</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '8356a2b7d25c420fb4171ee574f7d748',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is the safest way to protect your recovery phrase?',
          rightAnswerNumber: 4,
          answers: [
            'Store it on your computer and print it out.',
            'Take a screenshot and store it on your phone.',
            'Save it in your Dropbox account.',
            'Write it on durable material and store it in a safe place.'
          ],
          id: 'wallet-basics-6'
        }
      },
      {
        type: 'LEARN',
        notionId: '6c2cef180a894009807af59ed2d5f27c',
        title: 'Hot Wallet',
        content: '<div class="bloc1"><p>There are two main types of <code>non-custodial wallets</code>: software wallets (also called <code>hot wallets</code>) and hardware wallets (also called <code>cold wallets</code>)</p><p>A software wallet is an app or browser extension that stays connected to the internet.</p><ul><li>PROS 👍: It is usually free, easy to set up and easy to use.</li><li>CONS 👎: Since it is software connected to the internet, it is potentially a target for hackers.</li></ul></div><div class="bloc2"><img src=\'/lesson/wallet-basics/hot-wallet-1d444d7c.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '2db8d9f5695b4b46aa35bef2e17bcb75',
        title: 'Cold Wallet',
        content: '<div class="bloc1"><p>A <code>cold wallet</code>, or hardware wallet, only connects to the Internet when you physically connect it to a computer or device.</p><ul><li>PROS 👍: It is more secure against threats such as hacking.</li><li>CONS 👎: It is not free, not ideal for quick transactions, and can be cumbersome to use.</li></ul></div><div class="bloc2"><img src=\'/lesson/wallet-basics/cold-wallet-59646edb.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e60c91b7bb054ea8b4e449ddf6f1042b',
        title: 'Knowledge Check',
        quiz: {
          question: 'Is a cold wallet more secure than a hot wallet?',
          rightAnswerNumber: 1,
          answers: [
            'Yes',
            'No'
          ],
          id: 'wallet-basics-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '66d21ca797f44f02861545e2042582c8',
        title: 'MetaMask Wallet',
        content: '<div class="bloc1"><p>There are several <code>non-custodial hot wallets</code> available today. We will explore the popular MetaMask Wallet for the rest of this lesson because:</p><ul><li>It is likely to be compatible with most <code>DeFi</code> apps.</li><li>It has a browser extension for the Chrome, Brave, Edge, and Firefox internet browsers.</li><li>It is also available as a mobile app for Android and iOS users.</li></ul></div><div class="bloc2"><img src=\'/lesson/wallet-basics/metamask-wallet-521de184.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e60c91b7bb054ea8b4e449ddf6f1042b',
        title: 'Knowledge Check',
        quiz: {
          question: 'Is MetaMask a custodial wallet?',
          rightAnswerNumber: 2,
          answers: [
            'Yes',
            'No'
          ],
          id: 'wallet-basics-8'
        }
      },
      // {
      //   type: 'QUEST',
      //   title: 'Wallets',
      //   component: 'WalletBasics'
      // },
      {
        type: 'END',
        title: 'Certificate'
      }
    ]
    
  },
  {
    kudosImageLink: '/badges/badge-celebrate.png',
    lessonImageLink: '/courses/course-web3-intro.png',
    socialImageLink: '/lesson/blockchain-basics/social-07ea2639.jpg',
    learningActions: '',
    marketingDescription: 'Blockchains make cryptocurrency, DeFi, and Web3 possible. Discover how blockchain networks are built and how they work.',
    kudosId: 2563,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Learn about the fundamental architecture of blockchain technology.',
    name: 'Blockchain Fundamentals',
    quest: 'BlockchainBasics',
    publicationStatus: 'publish',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '562dba7dbd3949b480be367a64821cdf',
    slug: 'blockchain-basics',
    imageLinks: [
      '/lesson/blockchain-basics/introduction-6d0b6137.svg',
      '/lesson/blockchain-basics/blockchain-structure-346dae14.svg',
      '/lesson/blockchain-basics/examining-the-ledger-74e5f072.svg',
      '/lesson/blockchain-basics/transactions-on-the-ledger-f4f9d470.svg',
      '/lesson/blockchain-basics/block-anatomy-8ba3bea2.svg',
      '/lesson/blockchain-basics/inside-a-block-b11c74ce.svg',
      '/lesson/blockchain-basics/individual-transactions-2f6bf118.svg',
      '/lesson/blockchain-basics/user-addresses-e9456d37.svg'
    ],
    slides: [
      {
        type: "LEARN",
        notionId: "2541f10fa3264827ac57b1cf863254fb",
        title: "<strong>Introduction</strong>",
        content: "<div class=bloc1><p><code>Blockchain technology</code> is a revolutionary way of storing and tracking data, while making that data accessible to anyone. It is a way of organizing data into a unique public list of all historical transactions that anyone can see but cannot edit. This public list of transactions is collectively known as the <code>ledger</code> of the blockchain.</p><p>After examining the layers of a blockchain, we will use a blockchain tool called a <code>block explorer</code> to analyze the specifics of the structure of the Ethereum blockchain; we will focus on the Ethereum blockchain to see the <strong>list</strong> of blocks, the <strong>transactions</strong> within those blocks, and the <strong>details</strong> of each individual transaction.</p></div><div class=bloc2><img src='/lesson/blockchain-basics/introduction-6d0b6137.svg'></div>"
      },
      {
        type: "LEARN",
        notionId: "76f2f8016f44493eb57a3139cb515017",
        title: "Blockchain Structure",
        content: "<div class=bloc1><p>The term blockchain can be used as a noun — the Bitcoin blockchain — or as an adjective — blockchain technology. Either way, <code>blockchain</code> refers to the entire structure on which cryptocurrencies are based.</p><p>If we approach from the outside, there are 3 levels of structure in a blockchain:</p><ol><li>The general <code>blockchain</code> is composed of blocks that are linked in order</li><li>The <code>blocks</code> are made up of groups of bundled transactions</li><li>The <code>transactions</code> are amounts of money sent between two <code>addresses</code> on the network</li></ol><p>This three-level structure comes together to create a cryptographic record - an unalterable history of all transactions made on the network.</p></div><div class=bloc2><img src='/lesson/blockchain-basics/blockchain-structure-346dae14.svg'></div>"
      },
      {
        type: "QUIZ",
        notionId: "f98dfb3cfba44c0ba527d7a60df88aae",
        title: "Knowledge Check",
        quiz: {
          question: "What is a blockchain?",
          rightAnswerNumber: 4,
          answers: [
            "Organized groups of transactions called blocks",
            "A list of amounts of money sent between two addresses",
            "Blocks linked in sequence",
            "All of the above"
          ],
          id: "blockchain-basics-1"
        }
      },
      {
        type: "LEARN",
        notionId: "edad96fceca6484eb72f5b301f33dea2",
        title: "Examining the Ledger",
        content: "<div class=bloc1><p>In typical monetary systems, we trust third parties like banks to keep track of how much money each person has. But, to be truly bankless, we want a system that does not force us to trust an entity to manage the ledger.</p><p>The <code>ledger</code> is the list of ALL transactions made on a blockchain, and anyone can see it for <code>public</code> blockchains. Discrete groups of transactions from the ledger form the blocks that together make upHere's the continuation of the English translation: the blockchain.</p><p>When new transactions are added to the ledger, the balances stored in each <code>address</code> are updated; past transactions cannot be altered. It's like allowing everyone to look at the transaction history of everyone's bank accounts, at any time, forever.</p></div><div class=bloc2><img src='/lesson/blockchain-basics/examining-the-ledger-74e5f072.svg'></div>"
      },
      {
        type: "LEARN",
        notionId: "1af211fce04445b18b017c8ede82fe09",
        title: "Transactions in the Ledger",
        content: "<div class=bloc1><p>Let's look at some example transactions:</p><ul><li>Alice sends 5 ETH to Bob</li><li>Bob sends 2 ETH to Charlie</li></ul><p>Individual transactions show the <em>change</em> in the amount of cryptocurrency for each address, so the total result of all transactions IS the amount of cryptocurrency that each address has.</p><hr><p>⇒ Alice has lost 5 ETH</p><p>⇒ Bob has gained a total of 3 ETH (received 5, sent 2)</p><p>⇒ Charlie has gained 2 ETH</p></div><div class=bloc2><img src='/lesson/blockchain-basics/transactions-on-the-ledger-f4f9d470.svg'></div>"
      },
      {
        type: "QUIZ",
        notionId: "07e7cd73bf0b44af9cc46350430df624",
        title: "Knowledge Check",
        quiz: {
          question: "Which of the following statements is/are true for public blockchain ledgers?",
          rightAnswerNumber: 4,
          answers: [
            "All transactions are public and past transactions are unalterable",
            "The ledger tracks how much cryptocurrency each address currently has",
            "The ledger grows as new transactions are added to it",
            "All of the above"
          ],
          id: "blockchain-basics-2"
        }
      },
      {
        type: "LEARN",
        notionId: "c344b7d4cf204ce1a627e1c3ea21d299",
        title: "Decentralization",
        content: "<div class=\"bloc1\"><p>The transactions included in the <code>blockchain</code> ledger are not only immutable, but they are also shared and distributed across a large network of computers. To ensure that no entity has the power to change the data, the blockchain ledger is stored on each device, called a <code>node</code>, on the network.</p><p>This shared data is what makes the blockchain ledger <code>decentralized</code>. No single authority or entity controls the data. Blockchains like Ethereum are also <code>public</code> because anyone can view the ledger. </p><p>We will look at specific details on how new data is added and how we ensure that everyone has a copy of the same data all the time in our next Blockchain Theory lesson. For this lesson, just remember that the ledger data is shared by every computer running on the Ethereum network.</p></div>"
      },      
      {
        type: "QUIZ",
        notionId: "4073ac46370144d2919367efcef7ee37",
        title: "Knowledge Check",
        quiz: {
          question: "What makes a blockchain decentralized?",
          rightAnswerNumber: 3,
          answers: [
            "Only one entity can write to the blockchain",
            "It meets decentralization requirements set by the government",
            "No single authority or entity controls the ledger or access to the ledger's data because it is distributed across a large network of computers",
            "The ledger is stored on a single secure server"
          ],
          id: "blockchain-basics-3"
        }
      },
      {
        type: "LEARN",
        notionId: "6d45c90a4b094caa8d1c8d2c71523284",
        title: "Anatomy of a Block",
        content: "<div class=\"bloc1\"><p>An important feature of blockchains is that past transaction data cannot be changed once it has been included in a block. This is because each block has a unique <code>block hash</code>, like a fingerprint, that is used to link the blocks one after the other. No one can change past transactions without changing that fingerprint and the fingerprint of EVERY block that follows it, because each fingerprint depends on the previous one.</p><p>So each <code>block</code> is simply a group of transactions bundled into a file along with that block's <code>block hash</code>. The blocks are chained because each one references the unique fingerprint of the previous block to form a connected chain of blocks.</p></div><div class=\"bloc2\"><img src='/lesson/blockchain-basics/block-anatomy-8ba3bea2.svg'></div>"
      },
      {
        type: "QUIZ",
        notionId: "47a59ed5d3814cbdb5806331b37d6766",
        title: "Knowledge Check",
        quiz: {
          question: "What is the purpose of a block hash?",
          rightAnswerNumber: 2,
          answers: [
            "To encrypt the block data so no one can read it",
            "To link each block with the previous and ensure that past transaction data doesn't change",
            "To ensure transactions are sent to the correct address",
            "To ensure that the blockchain remains decentralized"
          ],
          id: "blockchain-basics-4"
        }
      },
      {
        type: "LEARN",
        notionId: "6f1cc1133e8e4b86b3579fb4d4eb4a1c",
        title: "Inside a Block",
        content: "<div class=\"bloc1\"><p>Remember, a <code>block</code>'s data are simply a group of transactions bundled together. Looking inside a single block, we see a list of transactions and some data about who created the block. </p><p>From our previous example when discussing the blockchain ledger, both transactions could be bundled inside one block, or spread across several blocks over time. But regardless of which block they're included in, they all get added to the overall blockchain ledger eventually.</p><ul><li>Alice sends 5 ETH to Bob</li><li>Bob sends 2 ETH to Charlie</li></ul><p>Remember, each block also has to reference the previous block's <code>block hash</code> to link the blockchain.</p></div><div class=\"bloc2\"><img src='/lesson/blockchain-basics/inside-a-block-b11c74ce.svg'></div>"
      },
      {
        type: "QUIZ",
        notionId: "311096618ecd451ba65677f2c3139823",
        title: "Knowledge Check",
        quiz: {
          question: "The following information is contained in a block:",
          rightAnswerNumber: 3,
          answers: [
            "All the information contained in the previous blocks, so that the blockchain is always up to date",
            "Anything relevant to the blockchain as the block size is unlimited",
            "Transaction data and a reference to the previous block",
            "All transaction data generated within a fixed time frame"
          ],
          id: "blockchain-basics-5"
        }
      },
      {
        type: "LEARN",
        notionId: "a9a1ce74d04c439f97249b2000964e5e",
        title: "Individual Transactions",
        content: "<div class=\"bloc1\"><p>The data in any blockchain are simply a list of <code>transactions</code>, records of currency moved between users. Each transaction must be signed with the sender's <code>digital signature</code> to be valid. </p><p>This is what you do when you confirm a transaction with a wallet, you are signing with your digital signature to authorize the transaction. Anyone can verify this signature to confirm that it comes from the wallet holder, without the holder needing to reveal their private key. </p><p>The wallet also calculates the amount of <code>gas</code> needed for the transaction and allows you to adjust the amount of gas and the gas price for the transaction. This is the fee that is paid for including the transaction in the blockchain. </p></div><div class=\"bloc2\"><img src='/lesson/blockchain-basics/single-transaction-ffc6b7e2.svg'></div>"
      },
      {
        type: "QUIZ",
        notionId: "a2f62f4553ca46a79e55a290f7a74e91",
        title: "Knowledge Check",
        quiz: {
          question: "What is the function of the digital signature in a blockchain transaction?",
          rightAnswerNumber: 1,
          answers: [
            "It authorizes the transaction and allows its verification without revealing the sender's private key",
            "It encrypts the transaction so that no one can read it",
            "It calculates the amount of gas needed for the transaction",
            "It acts as a PIN code to unlock the wallet"
          ],
          id: "blockchain-basics-6"
        }
      },
      {
        type: "LEARN",
        notionId: "b4f0ce31ff20480aa97dd69b2c7b091c",
        title: "User Addresses",
        content: "<div class=\"bloc1\"><p>An <code>address</code> is a public identifier that anyone can look up on the blockchain. Like an email address, anyone can send funds to it, but only someone who controls the <code>private key</code> can unlock and use the funds from that address.</p><p>In Ethereum, an address always starts with <em>0x_________</em> and consists of 42 characters of numbers and letters derived from that address's <code>public key</code>.</p><p>When we look at a single transaction in a block explorer, we can see the 'From:' and 'To:' addresses. This doesn't tell us who the <em>people</em> are that control those addresses, but it allows any user to track the movement of cryptocurrency through the blockchain ledger.</p></div><div class=\"bloc2\"><img src='/lesson/blockchain-basics/user-addresses-e9456d37.svg'></div>"
      },
      {
        type: "QUIZ",
        notionId: "5a6cfd2b2a9c4a059253b7f23ba3f74c",
        title: "Knowledge Check",
        quiz: {
          question: "What is true about blockchain addresses?",
          rightAnswerNumber: 4,
          answers: [
            "They are the public identifiers of different entities in a blockchain",
            "They always start with 0x in Ethereum",
            "Whoever controls the private key of an address can use the funds from that address",
            "All of the above"
          ],
          id: "blockchain-basics-7"
        }
      },      
      {
        type: 'END',
        title: 'Lesson Reward'
      }
    ]
  },
  {
    kudosImageLink: '/badges/badge-celebrate.png',
    lessonImageLink: '/courses/course-defi.png',
    socialImageLink: '/lesson/intro-to-defi/social-ee8d95a4.jpg',
    learningActions: 'Transfer crypto into your web3 wallet in order to be ready to interact with DeFi later',
    marketingDescription: 'Move beyond centralized exchanges and start exploring the ever-expanding possibilities of decentralized finance.',
    kudosId: 2562,
    duration: 10,
    learnings: '',
    difficulty: 'Easy',
    description: 'Understand the basics of decentralized finance.',
    name: 'DeFi 101',
    quest: 'IntroToDeFi',
    publicationStatus: 'publish',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: 'fdbf6e4c2ad648c6b815137d0e05eb90',
    slug: 'intro-to-defi',
    imageLinks: [
      '/lesson/intro-to-defi/defi-defined-46782447.svg',
      '/lesson/intro-to-defi/earning-yield-c5f123f8.svg',
      '/lesson/intro-to-defi/what-you-can-do-with-defi-9b17cf2e.svg',
      '/lesson/intro-to-defi/investing-d99a6d1f.svg',
      '/lesson/intro-to-defi/trading-8cd72977.svg',
      '/lesson/intro-to-defi/lending-borrowing-4fb1c7c3.svg',
      '/lesson/intro-to-defi/staking-b4b4319d.svg',
      '/lesson/intro-to-defi/defi-downsides-51dd6225.svg',
      '/lesson/intro-to-defi/defi-downsides-3a6ce496.svg',
      '/lesson/intro-to-defi/defi-downsides-83a9391f.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'abdb330ec2194271a729128226eadb2d',
        title: 'Defining DeFi',
        content: '<div class="bloc1"><p>DeFi—abreviatura de <code>finanzas descentralizadas</code>—se refiere al ecosistema de rápido crecimiento de productos financieros, protocolos y aplicaciones que operan en redes <code>blockchain</code> públicas.</p><p>DeFi está transformando rápidamente el mundo de las finanzas con una gama de nuevas herramientas para poner los activos cripto a trabajar. Ofrece oportunidades más allá de simplemente comprar cripto en un intercambio centralizado. Permite a todos y cada uno construir un estilo de vida descentralizado y sin bancos.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/defi-defined-46782447.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '5d93d188e0274acbb22cc32e433c3b67',
        title: '¿Por qué DeFi?',
        content: '<div class="bloc1"><p>DeFi permite a cualquier persona con una conexión a internet tener acceso a sofisticadas herramientas financieras: Trading, Opciones, Préstamos y Endeudamiento.</p><p>DeFi ofrece estas herramientas a los usuarios de manera transparente y abierta. Cualquiera puede ver el código y verificar que el contrato hace lo que dice que hace, a diferencia de lo que los bancos hacen con tu dinero detrás de puertas cerradas.</p><p>No hay intermediarios para mediar o tomar un porcentaje de tus transacciones.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '920b875598a34fa59affe46e58ed4e58',
        title: 'Comprobación de Conocimientos',
        quiz: {
          question: '¿Qué significa DeFi? ',
          rightAnswerNumber: 2,
          answers: [
            'Ficción derivada',
            'Finanzas descentralizadas',
            'Campo de desregulación',
            'Pescadores degenerados'
          ],
          id: 'intro-to-defi-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '772e17d6104145f7969b47fd2e132e68',
        title: '<strong>Yield Farming</strong>',
        content: '<div class="bloc1"><p>Existe un número creciente de protocolos <code>DeFi</code> que te permiten obtener intereses y otras recompensas utilizando tus activos criptográficos. Puedes tener acceso a productos financieros que normalmente necesitarías de un banco o una firma de servicios financieros para obtener—pero sin el papeleo, intermediarios, proceso de aprobación y otras molestias del mundo financiero tradicional.</p><p>Al eliminar al intermediario, también eliminas cualquier tarifa de servicio, cuotas y comisiones que normalmente pagarías en el mundo financiero tradicional. Con DeFi, te quedas con todas las recompensas, o rendimiento ganado de tus activos. Es por eso que DeFi es popular. </p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/earning-yield-c5f123f8.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '465a40fdbe24487695394ee1b4a4e97a',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Cómo puedes obtener rendimiento con cripto?',
          rightAnswerNumber: 3,
          answers: [
            '[A] Ganar interés depositando en un protocolo DeFi',
            '[B] Ganar recompensas depositando en un protocolo DeFi',
            '[C] Ambos, A y B',
            '[D] No puedes obtener rendimiento en cripto'
          ],
          id: 'intro-to-defi-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '153a075b1a004f38a9c177486aa95395',
        title: 'Lo que Puedes Hacer Con DeFi',
        content: '<div class="bloc1"><p>Las transacciones <code>DeFi</code> son <code>sin permiso</code>. Esto se refiere a una <code>blockchain</code> pública que cualquiera puede usar para comprar, vender o intercambiar activos. Ninguna tercera parte controla o supervisa la actividad. Estas transacciones son llevadas a cabo por aplicaciones descentralizadas, conocidas como DApps. </p><p>Las <code>DApps</code> y las plataformas DeFi permiten a los usuarios realizar cada vez más tipos de transacciones financieras, 24/7, en todo el mundo. Presentaremos cuatro de las oportunidades más comunes utilizadas para obtener rendimiento en DeFi - inversión, comercio, préstamos y empréstitos, y staking.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/what-you-can-do-with-defi-9b17cf2e.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '3b77e3afde594c788122db7fe4afab6e',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: 'Llene el espacio en blanco: Las transacciones DeFi son ____.',
          rightAnswerNumber: 3,
          answers: [
            'Gratis',
            'Controladas',
            'Sin permiso',
            'Centralizadas'
          ],
          id: 'intro-to-defi-3'
        }
      },      
      {
        type: 'LEARN',
        notionId: '555dff92a9b34743b498f8a01de6ffa4',
        title: '<strong>Inversiones con DeFi</strong>',
        content: '<div class="bloc1"><p>La transacción <code>DeFi</code> más común es comprar alguna criptomoneda con la expectativa de que valdrá más en el futuro. Esto se conoce como inversión.</p><p>HODL es un término utilizado para mantener los activos criptográficos durante mucho tiempo. Dependiendo de a quién le preguntes, el meme HODL proviene de un error tipográfico de HOLD o significa <strong>H</strong>old <strong>O</strong>n for <strong>D</strong>ear <strong>L</strong>ife.</p><p>DeFi permite el acceso temprano a monedas y tokens para encontrar e invertir, antes de que se coticen en bolsas centralizadas (CEX).</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/investing-d99a6d1f.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '6dc82def6bab41e2b54efa5a62f941b7',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Qué significa HODL?',
          rightAnswerNumber: 4,
          answers: [
            'Es un error de escritura de HOLD',
            'Hold On for Dear Life',
            'Mantener cripto por mucho tiempo',
            'Todas las anteriores'
          ],
          id: 'intro-to-defi-4'
        }
      },
      {
        type: 'LEARN',
        notionId: 'b1da9af463c24fd3a1fb8ce6a5b8dfaf',
        title: 'Comercio',
        content: '<div class="bloc1"><p>Un intercambio descentralizado (DEX) muestra las tasas de cambio actuales entre diferentes tokens y monedas criptográficas y sirve como un mercado digital que facilita el comercio de una moneda por otra al reunir a compradores y vendedores. </p><p>Las partes involucradas en un comercio DEX no necesitan conocerse ni confiar entre sí. De hecho, puede parecer que estás comerciando con el DEX. Sin embargo, en la mayoría de los casos, el DEX crea <code>piscinas de liquidez</code> que facilitan el comercio entre las <code>carteras</code> de dos comerciantes de manera <code>sin permiso</code>.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/trading-8cd72977.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '4e1e78e61bc240f0836346fcabb49f54',
        title: '¿Y qué?',
        content: '<div class="bloc1"><p>Cualquiera puede comerciar y participar en los mercados sin importar su patrimonio neto. Cualquiera puede entrar o salir de una posición a través de protocolos en cadena.</p></div>'
      },      
      {
        type: 'QUIZ',
        notionId: '1d627556f09143b18edefdf87e059db6',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Qué es un DEX?',
          rightAnswerNumber: 1,
          answers: [
            'Un intercambio descentralizado',
            'Un xilófono eléctrico digital',
            'Un fondo de índice cripto',
            'Ninguna de las anteriores'
          ],
          id: 'intro-to-defi-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '929543eaa9b64ab9b14a6593e95fb9ef',
        title: '<strong>Préstamos y Empréstitos</strong>',
        content: '<div class="bloc1"><p>Los préstamos y empréstitos DeFi ofrecen préstamos sin la necesidad de un banco o institución intermediaria. En cambio, el préstamo se realiza a nivel de <code>peer-to-peer</code>. Eso significa que las transacciones son entre dos partes y no requieren de un intermediario o entidad controladora.</p><p>Existen <code>DApps</code> que permiten a cualquier persona prestar y pedir prestados activos criptográficos. Al igual que los préstamos tradicionales, un prestamista ganará intereses sobre el préstamo y el prestatario deberá pagar el principal del préstamo más los intereses.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/lending-borrowing-4fb1c7c3.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '062707cc00eb4fe9830d8f6535e50387',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: 'Rellena el espacio en blanco: Los préstamos DeFi se realizan a nivel _____.',
          rightAnswerNumber: 2,
          answers: [
            'de ingresos a deuda',
            'peer-to-peer',
            'de bancos a clientes',
            'de ingresos a intereses'
          ],
          id: 'intro-to-defi-6'
        }      
      },
      {
        type: 'LEARN',
        notionId: '88ac3e93d3c849db8420b1700884030c',
        title: '<strong>Staking</strong>',
        content: '<div class="bloc1"><p>El staking DeFi es similar al préstamo, sin embargo, es un tipo especial de préstamo. En lugar de prestar tu cripto a otro usuario en una base <code>peer-to-peer</code>, prestas tu cripto a una red o protocolo. A cambio de ayudar a asegurar la red o el protocolo, ganas recompensas.</p><p>Los intercambios centralizados también ofrecen staking. Sin embargo, al igual que sus pares de trading, las oportunidades y recompensas de staking son limitadas. Con DeFi, hay muchas más posibilidades de staking que las que existen con los intercambios centralizados. </p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/staking-b4b4319d.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'ae7f5581ae404a1a83e1542eeee9d945',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Prestar tu cripto a un protocolo es un ejemplo de?',
          rightAnswerNumber: 2,
          answers: [
            'Trading',
            'Staking',
            'Préstamo',
            'HODLing'
          ],
          id: 'intro-to-defi-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '9b122d2d398a47428a41838e3bc9a521',
        title: '<strong>Desventajas de DeFi</strong>',
        content: '<div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/intro-to-defi/defi-downsides-51dd6225.svg\'></div><div class="bloc-b"><p><strong>Hackers</strong></p><p>Donde hay dinero y tecnología, hay personas buscando formas de hackear el sistema y aprovecharse de las medidas de seguridad deficientes.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/intro-to-defi/defi-downsides-3a6ce496.svg\'></div><div class="bloc-b"><p><strong>Riesgo</strong></p><p>DeFi, como la tecnología blockchain, funciona con código. Si hay un error o laguna en el código, puede ser explotado.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/intro-to-defi/defi-downsides-83a9391f.svg\'></div><div class="bloc-b"><p><strong>Sin recurso</strong></p><p>Ser descentralizado también significa que no hay empresas ni agencias gubernamentales a las que puedes pedir ayuda si algo sale mal.</p></div></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4b5bd41ee29942ea8cfc577f2e495baa',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Qué es un riesgo en DeFi?',
          rightAnswerNumber: 4,
          answers: [
            'No hay riesgos',
            'El banco puede rechazar tu préstamo',
            'El mal tiempo podría cerrar el intercambio',
            'Puede haber un error en el código'
          ],
          id: 'intro-to-defi-8'
        }
      },      
      {
        type: 'END',
        title: 'Lesson Reward'
      }
    ]
  },
  {
    kudosImageLink: '/badges/badge-celebrate.png',
    lessonImageLink: '/courses/course-dex.png',
    learningActions: '',
    marketingDescription: 'DEXs and AMMs have changed the landscape of traditional market trading. It’s time to understand why, and how you can use this technology to your own advantage.',
    kudosId: null,
    duration: 15,
    learnings: '',
    difficulty: undefined,
    description: 'Discover how smart contract exchanges enable permissionless token exchanges!',
    name: 'Decentralized Exchanges (DEXs)',
    quest: 'DEXsAndAMMs',
    publicationStatus: 'publish',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '0ff0ff5bde6c43f99f7710352069163e',
    slug: 'dexs-and-amms',
    imageLinks: [],
    slides: [
      {
        type: 'LEARN',
        notionId: 'cc07e9a8a87744daa6548a95ae696fd2',
        title: 'Introducción',
        content: '<div class="bloc1"><p>Los <code>Intercambios Descentralizados</code> (DEXs) eliminan los costos de los intermediarios y ahorran dinero a los Exploradores cuando intercambian activos. </p><p>Pero, ¿sabías, Explorador, que hay más formas de ahorrar con la tecnología DeFi? Utilizando <code>agregadores DEX</code>, puedes escanear todas las operaciones posibles en varias plataformas DEX simultáneamente y ejecutar la mejor ruta de comercio, todo en una sola acción. Te ayudan a obtener el mejor trato cuando haces un <code>swap</code> de tokens. Al igual que los agregadores de vuelos de aerolíneas te ayudan a encontrar el vuelo más barato, los agregadores DEX te ayudan a maximizar el valor de tu operación.</p><p>Esta lección mostrará:</p><ol><li>Cómo los DEX dividen la liquidez y cómo eso puede resultar en tasas de negociación reducidas.</li><li>Cómo los agregadores DEX permiten a los usuarios ver y usar varios DEX a través de una única interfaz.</li><li>Múltiples formas en que una única interfaz de agregador puede ahorrar tiempo y dinero a los Exploradores.</li></ol></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/introduction-ba453b68.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '0e59fd1b9b7943a3a70a44abc9e921c1',
        title: 'Cómo la Liquidez Afecta los Precios',
        content: '<div class="bloc1"><p>La cantidad de cualquier token que está disponible para negociar en un solo mercado se llama <code>liquidez</code> del token. La cantidad de liquidez disponible influye fuertemente en el <code>impacto del precio</code> al hacer operaciones en DeFi; un gran impacto en el precio significa que la operación costará más, y un bajo impacto en el precio costará menos. La mayoría de las personas prefieren operar en mercados con mayor liquidez para reducir su impacto en el precio. </p><p>Puedes pensar en ello como una piscina; cuanta más agua (liquidez) hay, menor es el <em>cambio </em>en el nivel del agua (impacto en el precio) cuando alguien salta o sale. El tamaño de ese "alguien" (la operación) también afecta el <em>cambio</em> en el nivel del agua (impacto en el precio).</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '8ea31e80fcfc49d3a88ad09d03341c9c',
        title: 'Un Ejemplo de Cómo la Liquidez Impacta los Precios',
        content: '<div class="bloc1"><p>Vamos a ver un ejemplo. </p><p>El token de BanklessDAO (BANK) tiene una cantidad de liquidez de ~30 millones de BANK en Uniswap, pero solo ~4.5 millones de BANK en SushiSwap. Uniswap tiene más de 6 veces la liquidez de BANK que SushiSwap.</p><p>Si un Explorador fuera a comprar 10,000 BANK de cada pool, encontraría que el <code>impacto en el precio</code> de su operación resultaría en un precio de comercio más alto en la pool de SushiSwap, porque su operación ha extraído un porcentaje mayor de la liquidez total de la pool.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/an-example-of-how-liquidity-impacts-prices-915b3d84.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'c60d776bd01247b79e037003d737f924',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: 'Completa los espacios en blanco: Para encontrar el mejor precio, la gente querrá operar en mercados con ________ liquidez para tener ________ impacto en el precio en sus operaciones.',
          rightAnswerNumber: 2,
          answers: [
            'buena, máximo',
            'alta, bajo',
            'baja, buena',
            'escasa, grande'
          ],
          id: 'dex-aggregators-1'
        }
      },      
      {
        type: 'LEARN',
        notionId: 'b97afba7b0f44b709f57d6e85ce13cc2',
        title: 'Limitaciones de los DEX Tradicionales: Liquidez Escasa',
        content: '<div class="bloc1"><p>DeFi continúa creciendo, pero está surgiendo un problema para los usuarios: A medida que se lanzan más DEX, la cantidad total de cualquier token individual se dispersa. Esto se conoce como liquidez escasa.</p><p>Recuerda la piscina: si el agua disponible (<code>liquidez</code>) se divide entre varias piscinas, la cantidad de agua será "más escasa" en cada piscina en comparación con el total en la única piscina original.</p><p>En 2020, Uniswap tenía gran parte de la liquidez DEX para operar en DeFi. Cuando SushiSwap se lanzó el mes siguiente, atrajo más de $1B en liquidez a su DEX de Uniswap, reduciendo la liquidez total en Uniswap. Esto fue solo el comienzo. Desde entonces, cada vez más DEX han entrado en el ecosistema DeFi, adelgazando progresivamente la liquidez de cada pool.</p><p>Por lo tanto, cualquier operación tiene un mayor <code>impacto en el precio</code> que cuando Uniswap tenía la mayoría de la liquidez total del ecosistema. A medida que se lanzan más DEX, cuesta más a los Exploradores operar en cualquier DEX individual sin nuevas innovaciones.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-c9e0b695.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'd9969ae7f6c247a097f7b7d419b6c119',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Qué dos factores determinan el impacto en el precio de una operación en DEX?',
          rightAnswerNumber: 3,
          answers: [
            'La elección del DEX que se utiliza para realizar la operación y el tamaño de la operación',
            'Qué token se elige para intercambiar y qué DEX se utiliza para realizar la operación',
            'El tamaño de la operación y la cantidad de liquidez disponible',
            'La cantidad de liquidez disponible y qué token se elige para intercambiar'
          ],
          id: 'dex-aggregators-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'c06177fa9ee3428c80a9295a8a09a9f2',
        title: 'Recombinando la Liquidez con los Agregadores DEX',
        content: '<div class="bloc1"><p>Se necesitan grandes cantidades de <code>liquidez</code> para reducir el impacto en el precio y ahorrar dinero. Los agregadores DEX permiten a los usuarios realizar operaciones a través de varios DEX a la vez y reducir el impacto en el precio; una gran operación desde la billetera de un Explorador se divide en múltiples operaciones pequeñas en múltiples DEX.</p><p>Los agregadores DEX incluso pueden dirigir las operaciones a través de un <code>token intermediario</code>, o más de uno, si eso proporciona un mejor resultado para los usuarios, al igual que un agregador de vuelos podría sugerir una parada extra en otro aeropuerto si es más barato para el pasajero. Este descubrimiento de la <code>ruta comercial</code> óptima lo realizan algoritmos sofisticados que buscan entre todas las rutas posibles para encontrar la ruta comercial más barata en ese momento.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/recombining-liquidity-with-dex-aggregators-f01777dd.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '063815f2667146a2921df5c4c3ca1663',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: 'El enrutamiento de operaciones en los agregadores DEX significa:',
          rightAnswerNumber: 4,
          answers: [
            'Las operaciones se dirigen de acuerdo con los acuerdos de liquidez con DEX específicos',
            'Las operaciones siempre se dirigen a través de varios DEX',
            'Las operaciones se dirigen solo a través del DEX favorito del usuario',
            'Las operaciones pueden ser dirigidas a través de múltiples DEX y tokens intermediarios'
          ],
          id: 'dex-aggregators-3'
        }
      },      
      {
        type: 'LEARN',
        notionId: '1c2f4199a9254d18897593b371ca4d9e',
        title: 'Cómo se calcula el costo del gas en Ethereum',
        content: '<div class="bloc1"><p>Antes de ver cómo las optimizaciones que hacen los agregadores de DEX pueden reducir las tarifas de red para los usuarios, refresquemos cómo se calcula el gas.</p><p>Al igual que la gasolina para un automóvil, el <code>gas</code> es el combustible para ejecutar el código blockchain en Ethereum. Cuanto más lejos viajes, más gas consume tu automóvil. Del mismo modo, cuantas más operaciones hagas, más gas requiere tu código. El precio del gas se mide en cantidades muy pequeñas de Ether llamadas <code>gwei</code>, como los centavos para un dólar. 1 gwei es mil millonésima parte de un ether (1 gwei = 0.00000001 ETH).</p><p>El costo total del gas se basa en la cantidad de gas que usa tu transacción y el precio unitario del gas en el momento de uso. La fórmula para calcular el precio de una transacción es la siguiente:<br><em>Cantidad de gas utilizado * Precio del gas = Costo total del gas</em></p><p>Como ejemplo, digamos que los costos del gas están en 22 gwei por unidad de gas y la transacción usa 120 mil unidades:<br><em>120,000 * 22 gwei = 2,640,000 gwei </em><em><strong>o</strong></em><em> 0.00264 ETH</em></p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c34efe86.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '7196f021bcc541929d68b9bd0c018ac3',
        title: 'Cómo los Agregadores Reducen los Costos del Gas para los Usuarios',
        content: '<div class="bloc1"><p>La división de operaciones resultaría en más tarifas de transacción debido a la actividad extra en la cadena, excepto que los agregadores avanzados planifican las tarifas de transacción y las incluyen en sus cálculos de la ruta comercial. Simulan las operaciones fuera de la cadena, incluyendo los costos de <code>gas</code>, para encontrar <code>rutas comerciales</code> que dejen a los Exploradores con el mayor valor al final de la interacción.</p><p>Algunos agregadores van aún más lejos: pueden reembolsar algunas de las tarifas de transacción de red por usar su protocolo. 1inch actualmente ofrece reembolsos en su token por una parte de los costos del gas al operar a través de su <code>dApp</code> en la red principal de Ethereum.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-28d6f207.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '2cf155ee9e3a4d4fb0a9c78f888d2373',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Cuál de las siguientes NO es una forma en que los agregadores de DEX intentan reducir los costos de transacción para los usuarios?',
          rightAnswerNumber: 2,
          answers: [
            'Simulan las transacciones fuera de la cadena antes de la ejecución de la operación',
            'Piden a los DEX que reduzcan las tarifas de red para sus usuarios',
            'Toman en cuenta el costo del gas en el enrutamiento de las operaciones',
            'Reembolsos de tokens en los costos del gas'
          ],
          id: 'dex-aggregators-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '19eb7c5516fd4da383c48661d21e34a1',
        title: 'Meta-Agregadores',
        content: '<div class="bloc1"><p>¡Incluso existen meta-agregadores de agregadores DEX! Estas plataformas buscan en todos los agregadores DEX competidores y proporcionan cotizaciones de precios a los usuarios. Un ejemplo de esto es la función de cambio en la aplicación en la billetera MetaMask. Esta característica es en realidad un meta-agregador que se basa en agregadores DEX como 1inch para funcionar.</p><p>Nota: Aunque son convenientes, los servicios de <code>meta-agregadores</code> pueden añadir costos extra encima de las tarifas de transacción de la red, aumentando el costo total para los usuarios. Exploradores: asegúrense de que sus operaciones no terminen siendo más caras de lo que pretendían. </p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/meta-aggregators-100793fd.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '7abcec930d924ca997d5f4221fae9ad6',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: 'Los meta-agregadores contrastan múltiples agregadores DEX para encontrar los mejores precios para sus usuarios.',
          rightAnswerNumber: 1,
          answers: [
            'Verdadero',
            'Falso'
          ],
          id: 'dex-aggregators-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '44acd0c428aa49e8880b26f1ffffd0b0',
        title: 'Evitando Ataques Sandwich',
        content: '<div class="bloc1"><p>Los usuarios que intercambian directamente a través de los <code>DEX</code> pueden perder valor hasta el límite de su <code>tolerancia al deslizamiento</code> debido a los cambios de precios coordinados por los productores de bloques, este tipo de pérdidas se llaman <code>ataques sandwich</code>. ¿Sabías que los ataques sandwich llevaron a los usuarios a una pérdida total de $235,000,000 durante 2021? Los Exploradores pueden protegerse manteniendo una baja tolerancia al deslizamiento al intercambiar tokens.</p><p>Afortunadamente, debido a la liquidez recombinada ofrecida por los agregadores de DEX, el impacto del precio de una operación se reduce. Los Exploradores pueden mantener su tolerancia al deslizamiento baja mientras ahorran más con los agregadores de DEX, en lugar de operar directamente en un DEX.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/avoiding-sandwich-attacks-75f6ae82.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9864a66638a3473ca13f8ee2dc8c4b1f',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: 'Para protegerte, deberías mantener tu tolerancia al deslizamiento:',
          rightAnswerNumber: 1,
          answers: [
            'baja',
            'alta'
          ],
          id: 'dex-aggregators-6'
        }
      },
      {
        type: 'LEARN',
        notionId: 'b1756984326242d4ad5e4ab2cbe2eb32',
        title: 'Más Protección Contra Los Sandwiches: Operaciones OTC',
        content: '<div class="bloc1"><p>Algunos agregadores como 1inch incluso ofrecen servicios <code>OTC</code> (<code>Over The Counter</code> o Sobre El Mostrador) especializados que proporcionan protección total contra los ataques sandwich. Estos servicios opcionales permiten el comercio directo con otros usuarios, en lugar de facilitar las operaciones a través de <code>piscinas de liquidez</code> DeFi. Cualquiera puede participar en operaciones <code>OTC</code> para eliminar completamente la amenaza de los ataques sandwich, proporcionando otra gran manera para que los Exploradores ahorren.</p><p>CoWSwap es un Meta-Agregador que también ofrece servicios resistentes a los sandwiches, habilitados por defecto, para asegurar que las operaciones estén 100% protegidas contra los ataques sandwich.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/more-protection-from-sandwiches-otc-trades-04ef66c9.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '18f1f2c0e7b84cfbafe1b26e139f0c25',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: 'Muchos agregadores de DEX ofrecen ¿qué herramienta(s) para ahorrar dinero a sus usuarios?',
          rightAnswerNumber: 4,
          answers: [
            'Enrutan las operaciones a través de la liquidez agregada de múltiples DEX para reducir el impacto del precio.',
            'Operaciones OTC que protegen totalmente contra los ataques sandwich.',
            'Toman en cuenta el costo del gas al construir las mejores rutas de operación.',
            'Todas las anteriores'
          ],
          id: 'dex-aggregators-7'
        }
      },      
      {
        type: 'END',
        title: 'Lesson Reward'
      }
    ]
  },
  {
    kudosImageLink: '/badges/badge-celebrate.png',
    lessonImageLink: '/courses/course-web3dev.png',
    socialImageLink: '/lesson/wallet-basics/social-230cc260.jpg',
    learningActions: 'Create and manage your own wallet\nConnect your wallet to a web3 website',
    marketingDescription: 'A crypto wallet is essential gear for Web3 and DeFi. Get basic training on how a wallet works and how to get started.',
    kudosId: 2561,
    duration: 20,
    learnings: '',
    difficulty: 'Easy',
    description: 'Learn about Web3 apps (Dapps) development.',
    name: 'Web3 Apps Development',
    quest: 'WalletBasics',
    publicationStatus: 'publish',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '98405bd0f2b94bb2a3079eed504a011e',
    slug: 'web3-apps',
    imageLinks: [
      '/lesson/wallet-basics/wallet-intro-7b45d75e.png',
      '/lesson/wallet-basics/wallet-definition-e8f8f9a8.svg',
      '/lesson/wallet-basics/recovery-phrase-c2d8fa26.svg',
      '/lesson/wallet-basics/public-key-b6387071.svg',
      '/lesson/wallet-basics/private-key-ca271641.svg',
      '/lesson/wallet-basics/custodial-wallet-29ed2b65.svg',
      '/lesson/wallet-basics/non-custodial-wallet-aee2708b.svg',
      '/lesson/wallet-basics/hot-wallet-1d444d7c.svg',
      '/lesson/wallet-basics/cold-wallet-59646edb.svg',
      '/lesson/wallet-basics/metamask-wallet-521de184.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '0bf15ec24615455b9349774527410d81',
        title: 'Bienvenido al Desarrollo de DApps con Web3',
        content: '<div class="bloc1"><p><strong>¡Saludos!</strong></p><p>Bienvenido al curso de Desarrollo de Aplicaciones Descentralizadas (DApps) con Web3. Estamos emocionados de ayudarte a navegar por este emocionante e innovador campo de la tecnología blockchain. Este curso está diseñado para enseñarte los fundamentos de DApps utilizando las tecnologías de Web3.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'baf157b016ba48a890eb4cacb4b903e5',
        title: 'Blockchain y Contratos Inteligentes',
        content: '<div class="bloc1"><p>Web3 se basa en tecnologías blockchain y contratos inteligentes. El <code>blockchain</code> es una base de datos descentralizada, y los contratos inteligentes son programas que se ejecutan en esta base de datos.</p><p>Los contratos inteligentes permiten la creación de aplicaciones descentralizadas (dApps) que funcionan en la cadena de bloques y no están controladas por una entidad única.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '100f6d3d7cd542889814cf17733e9960',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Qué es un contrato inteligente?',
          rightAnswerNumber: 3,
          answers: [
            'Un acuerdo legal digital',
            'Un contrato que requiere una firma digital',
            'Un programa que se ejecuta en la cadena de bloques',
            'Un contrato con una entidad de inteligencia artificial'
          ],
          id: 'web3-dev-1'
        }
      },
      // Cryptography
{
  type: 'LEARN',
  notionId: 'notion2',
  title: 'Criptografía en Web3',
  content: '<div class="bloc1"><p>La criptografía es una piedra angular de la seguridad y la funcionalidad de la Web3. A lo largo de esta sección, te introduciremos en los conceptos básicos de la criptografía, cómo se aplica en la blockchain y en las DApps.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},
// Criptografía en Blockchain
{
  type: 'LEARN',
  notionId: 'notion3',
  title: 'Criptografía en Blockchain',
  content: '<div class="bloc1"><p>La criptografía es esencial para la seguridad y la funcionalidad de la blockchain. Las transacciones, la creación de nuevos bloques y la garantía de integridad de los datos dependen todas de la criptografía. Vamos a explorar cómo se implementa la criptografía en un blockchain, y por qué es tan crítica.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Criptografía en DApps
{
  type: 'LEARN',
  notionId: 'notion4',
  title: 'Criptografía en DApps',
  content: '<div class="bloc1"><p>En las DApps, la criptografía no solo protege las transacciones, sino que también puede jugar un papel en la lógica de la aplicación, como en los contratos inteligentes. A lo largo de esta sección, veremos cómo se puede aplicar la criptografía en las DApps y por qué es importante para su funcionamiento.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

{
  type: 'QUIZ',
  notionId: 'quiz2',
  title: 'Prueba de Conocimiento',
  quiz: {
    question: '¿Por qué es importante la criptografía en la Web3?',
    rightAnswerNumber: 2,
    answers: [
      'Para cifrar los mensajes de correo electrónico',
      'Para garantizar la seguridad y la funcionalidad de la blockchain y las DApps',
      'Para proteger contra los virus de computadora',
      'Para mejorar el rendimiento del sistema'
    ],
    id: 'crypto-intro-1'
  }
},
      // SHA-256 en Criptografía
      {
        type: 'LEARN',
        notionId: 'notion5',
        title: 'SHA-256 en Criptografía',
        content: '<div class="bloc1"><p><code>SHA-256</code>, que significa Secure Hash Algorithm 256, es un algoritmo de hash criptográfico comúnmente utilizado en la blockchain. En términos simples, toma cualquier entrada y la convierte en una cadena alfanumérica única de longitud fija.</p><p>Este algoritmo es fundamental para garantizar la integridad y la seguridad de los datos en la blockchain. Cada transacción se pasa a través del algoritmo SHA-256 y se convierte en un hash. Este hash se utiliza luego para crear el sello digital de la transacción, permitiendo que cualquier cambio en la transacción se detecte fácilmente, ya que cambiaría el hash resultante.</p><p>La blockchain de Bitcoin, por ejemplo, utiliza SHA-256 para la creación de nuevos bloques y para asegurar las transacciones.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
      },
      // Introducción a Ethereum
{
  type: 'LEARN',
  notionId: 'notion8',
  title: 'Introducción a Ethereum',
  content: '<div class="bloc1"><p>Ethereum es una blockchain de código abierto que permite la creación de contratos inteligentes. Estos contratos son programas que se ejecutan en la Máquina Virtual Ethereum (EVM), y pueden automatizar la transferencia de criptomonedas bajo ciertas condiciones.</p><p>Ethereum amplía las posibilidades de blockchain más allá de la simple transferencia de valor. Con Ethereum, los desarrolladores pueden crear una variedad de aplicaciones, desde juegos hasta plataformas financieras.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

      // Criptografía en Ethereum
{
  type: 'LEARN',
  notionId: 'notion6',
  title: 'Criptografía en Ethereum',
  content: '<div class="bloc1"><p>La red de Ethereum, similar a Bitcoin, también utiliza criptografía para garantizar la seguridad e integridad de las transacciones. Aunque Ethereum utiliza el algoritmo Ethash para el minado de sus bloques en lugar de SHA-256, emplea criptografía de la misma manera crucial para la seguridad de las transacciones.</p><p>Cada cuenta en Ethereum tiene una clave pública y una clave privada. La clave privada se utiliza para firmar transacciones: cuando envías Ether o interactúas con un contrato inteligente, firmas la transacción con tu clave privada.</p><p>Esta firma puede ser verificada con la clave pública, pero es matemáticamente inviable derivar la clave privada a partir de la clave pública o de la firma. Esto permite que las transacciones sean seguras: sólo el poseedor de la clave privada puede firmar transacciones, pero cualquier persona puede verificar esas transacciones con la clave pública.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},
// Hashes en Ethereum
{
  type: 'LEARN',
  notionId: 'notion7',
  title: 'Hashes en Ethereum',
  content: '<div class="bloc1"><p>Los hashes juegan un papel fundamental en la seguridad de Ethereum y de otras blockchains. Un hash es una función que toma una entrada de cualquier tamaño y produce una salida de tamaño fijo. En el caso de Ethereum, la función de hash produce una salida de 256 bits.</p><p>Las funciones de hash tienen una propiedad clave: la misma entrada siempre producirá la misma salida, pero cualquier cambio, incluso minúsculo, en la entrada producirá una salida completamente diferente. Esto es útil para verificar la integridad de los datos. Por ejemplo, Ethereum utiliza hashes para verificar la integridad de los bloques y las transacciones.</p><p>Además, los hashes se utilizan para crear direcciones en Ethereum. Cuando se crea una nueva cuenta, se genera un par de claves pública y privada. La clave pública se pasa por una función de hash para crear la dirección de la cuenta.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Quiz
{
  type: 'QUIZ',
  notionId: 'quiz2',
  title: 'Prueba de Conocimiento',
  quiz: {
    question: '¿Cómo se utiliza la criptografía en Ethereum?',
    rightAnswerNumber: 4,
    answers: [
      'Para crear direcciones a partir de claves públicas',
      'Para firmar transacciones con claves privadas',
      'Para verificar la integridad de los datos utilizando hashes',
      'Todas las anteriores'
    ],
    id: 'crypto-eth-1'
  }
},

// Cómo funciona la EVM
{
  type: 'LEARN',
  notionId: 'notion9',
  title: 'La Máquina Virtual Ethereum (EVM)',
  content: '<div class="bloc1"><p>La Máquina Virtual Ethereum (EVM) es el entorno de ejecución para los contratos inteligentes en Ethereum. Es completamente aislada del resto de la red, lo que significa que cualquier operación que se realice dentro de la EVM no afecta a las partes externas de la red.</p><p>La EVM permite la ejecución de código complejo dentro de la blockchain, lo que hace posible la creación de aplicaciones descentralizadas (dApps). Todos los nodos de la red Ethereum tienen una implementación de la EVM y deben ejecutar el mismo código con los mismos resultados para mantener la coherencia de la red.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Gas, Ether y transacciones en Ethereum
{
  type: 'LEARN',
  notionId: 'notion10',
  title: 'Gas, Ether y Transacciones en Ethereum',
  content: '<div class="bloc1"><p>En Ethereum, las operaciones tienen un costo asociado denominado "gas". El gas es una medida de la cantidad de trabajo necesaria para ejecutar una operación específica o un contrato inteligente en la EVM. El costo del gas se paga en Ether, la criptomoneda nativa de Ethereum.</p><p>Cada transacción en Ethereum incluye una cantidad de gas y un precio del gas, que es la cantidad de Ether que el remitente está dispuesto a pagar por cada unidad de gas. Cuanto mayor sea el precio del gas, más atractiva será la transacción para los mineros, lo que podría resultar en una confirmación más rápida de la transacción.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Quiz
{
  type: 'QUIZ',
  notionId: 'quiz3',
  title: 'Prueba de Conocimiento',
  quiz: {
    question: '¿Qué es el gas en Ethereum?',
    rightAnswerNumber: 2,
    answers: [
      'Es la criptomoneda nativa de Ethereum',
      'Es una medida del trabajo necesario para ejecutar operaciones',
      'Es la máquina virtual donde se ejecutan los contratos inteligentes',
      'Es una herramienta de desarrollo para Ethereum'
    ],
    id: 'eth-vm-1'
  }
},
// Sintaxis y conceptos clave de Solidity
{
  type: 'LEARN',
  notionId: 'notion11',
  title: 'Sintaxis y Conceptos Clave de Solidity',
  content: '<div class="bloc1"><p>Solidity es un lenguaje de programación orientado a contratos inteligentes y utilizado para Ethereum. Su sintaxis es similar a JavaScript y está diseñado para facilitar la escritura de contratos inteligentes en la Máquina Virtual Ethereum (EVM).</p><p>Algunos conceptos clave de Solidity incluyen tipos de datos, funciones, control de acceso, herencia, y la capacidad de definir tu propio tipo de datos complejos.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Desarrollo de contratos inteligentes con Solidity
{
  type: 'LEARN',
  notionId: 'notion12',
  title: 'Desarrollo de Contratos Inteligentes con Solidity',
  content: '<div class="bloc1"><p>Con Solidity, puedes desarrollar contratos inteligentes que ejecutan operaciones y manejan Ether dentro de la EVM. Un contrato inteligente en Solidity es como una "clase" en otros lenguajes de programación, con funciones y estados propios.</p><p>Además, puedes definir constructores, que son funciones que se ejecutan al desplegar el contrato, y modificadores, que son piezas reutilizables de código en las funciones.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Pruebas y despliegue de contratos inteligentes
{
  type: 'LEARN',
  notionId: 'notion13',
  title: 'Pruebas y Despliegue de Contratos Inteligentes',
  content: '<div class="bloc1"><p>Es crucial probar y verificar la seguridad de tus contratos inteligentes antes de desplegarlos en la red principal de Ethereum. Herramientas como Truffle y Ganache pueden ayudarte a crear un entorno de pruebas para tus contratos.</p><p>Una vez que tus contratos hayan sido probados y auditados, pueden ser desplegados en la red principal de Ethereum, donde otros usuarios pueden interactuar con ellos.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Quiz
{
  type: 'QUIZ',
  notionId: 'quiz4',
  title: 'Prueba de Conocimiento',
  quiz: {
    question: '¿Qué es Solidity?',
    rightAnswerNumber: 1,
    answers: [
      'Un lenguaje de programación para desarrollar contratos inteligentes en Ethereum',
      'Una herramienta para probar contratos inteligentes',
      'Un estándar para tokens en Ethereum',
      'Una organización autónoma descentralizada'
    ],
    id: 'solidity-1'
  }
},

// Comprender los estándares ERC y su importancia
{
  type: 'LEARN',
  notionId: 'notion14',
  title: 'Comprender los Estándares ERC y Su Importancia',
  content: '<div class="bloc1"><p>Los estándares ERC, o Ethereum Request for Comments, son protocolos técnicos que proporcionan directrices para la creación de tokens y contratos inteligentes en Ethereum. Los estándares ERC más comunes son ERC20, ERC721 y ERC1155.</p><p>Estos estándares ayudan a garantizar la interoperabilidad entre diferentes aplicaciones y contratos inteligentes en Ethereum, facilitando así el desarrollo de DApps y DeFi.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Profundización en ERC20, ERC721, ERC1155 y su uso en DApps
{
  type: 'LEARN',
  notionId: 'notion15',
  title: 'Profundización en ERC20, ERC721, ERC1155 y Su Uso en DApps',
  content: '<div class="bloc1"><p>ERC20 es el estándar para tokens fungibles, o tokens que son intercambiables uno por otro. ERC721 es el estándar para tokens no fungibles (NFTs), que son únicos y no intercambiables. ERC1155 es un estándar más nuevo que permite la creación de tokens fungibles y no fungibles en un solo contrato.</p><p>Estos tokens pueden ser usados en una amplia variedad de DApps, desde juegos hasta plataformas de DeFi, y son una parte integral del ecosistema Ethereum.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Quiz
{
  type: 'QUIZ',
  notionId: 'quiz5',
  title: 'Prueba de Conocimiento',
  quiz: {
    question: '¿Qué es un token ERC20?',
    rightAnswerNumber: 2,
    answers: [
      'Un contrato inteligente',
      'Un tipo de token fungible en Ethereum',
      'Una billetera Ethereum',
      'Una organización autónoma descentralizada'
    ],
    id: 'ercs-1'
  }
},

      {
        type: 'LEARN',
        notionId: 'f764c92b0620495981b32bd34dd1fc62',
        title: 'Desarrollo de dApps',
        content: '<div class="bloc1"><p>Una parte crucial del desarrollo Web3 es la creación de dApps, siglas en inglés de Decentralized Applications (Aplicaciones Descentralizadas). Estas son aplicaciones que corren sobre una blockchain, aprovechando la seguridad y la descentralización que proporciona la cadena de bloques.</p><p>Las dApps pueden ser de cualquier tipo, desde juegos hasta plataformas financieras, y están transformando la forma en que interactuamos con el software.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9d0454d30e60454397b0926523f7e73c',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Qué es una dApp?',
          rightAnswerNumber: 1,
          answers: [
            'Una aplicación que se ejecuta en la cadena de bloques',
            'Una aplicación de Apple',
            'Una aplicación para Android',
            'Una aplicación para desarrolladores'
          ],
          id: 'web3-dev-2'
        }
      },

      {
        type: 'LEARN',
        notionId: '1632e1238db7412590f60b88d8a5c2ad',
        title: 'Herramientas de Desarrollo Web3: Remix',
        content: '<div class="bloc1"><p>Existen muchas herramientas que facilitan el desarrollo Web3. Remix es un entorno de desarrollo ampliamente utilizado para escribir contratos inteligentes en Solidity, el lenguaje de programación utilizado por Ethereum.</p><p>Remix ofrece un entorno de desarrollo de contratos inteligentes completo y fácil de usar en tu navegador. Además, Remix se integra con Metamask, lo que facilita las pruebas y el despliegue de tus contratos.</p><p>Es importante mencionar que existen otras herramientas útiles como Hardhat, un entorno de desarrollo de Ethereum que ayuda en la compilación, despliegue, pruebas y depuración de tus contratos inteligentes.</p><p>En las siguientes lecciones, exploraremos más profundamente cómo usar Remix para maximizar tu eficiencia de desarrollo.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
    },
    {
        type: 'QUIZ',
        notionId: '4eb4acacd7c9494386a77e5fb37bdf7d',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Qué es Remix en el contexto del desarrollo Web3?',
          rightAnswerNumber: 1,
          answers: [
            'Un entorno de desarrollo en el navegador para contratos inteligentes en Solidity',
            'Una aplicación de edición de música',
            'Un servicio de alojamiento de archivos en la nube',
            'Una herramienta de gestión de proyectos'
          ],
          id: 'web3-dev-3'
        }
    },

// Concepto y beneficios de las DAOs
{
  type: 'LEARN',
  notionId: 'notion16',
  title: 'Concepto y Beneficios de las DAOs',
  content: '<div class="bloc1"><p>Una Organización Autónoma Descentralizada (DAO) es una organización que es gobernada por código y cuya operación y toma de decisiones están automatizadas y descentralizadas.</p><p>Las DAOs tienen el potencial de crear organizaciones transparentes y justas, donde todos los participantes tienen voz en la toma de decisiones y el control no está centralizado en una sola entidad.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Cómo se estructuran y operan las DAOs
{
  type: 'LEARN',
  notionId: 'notion17',
  title: 'Cómo se Estructuran y Operan las DAOs',
  content: '<div class="bloc1"><p>Las DAOs están formadas por contratos inteligentes en Ethereum. Estos contratos automatizan la operación de la DAO, desde la toma de decisiones hasta la distribución de fondos.</p><p>Las decisiones en una DAO suelen tomarse mediante un proceso de votación, donde los miembros de la DAO pueden votar en propuestas basadas en la cantidad de tokens de gobernanza que poseen.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Crear y gestionar una DAO
{
  type: 'LEARN',
  notionId: 'notion18',
  title: 'Crear y Gestionar una DAO',
  content: '<div class="bloc1"><p>Crear una DAO implica el desarrollo de contratos inteligentes que definen las reglas y operaciones de la DAO. Existen frameworks como Aragon y DAOstack que facilitan la creación de DAOs.</p><p>La gestión de una DAO implica la propuesta y votación de decisiones, así como la interacción con otros miembros de la DAO para llegar a consensos y avanzar en los objetivos de la DAO.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Quiz
{
  type: 'QUIZ',
  notionId: 'quiz6',
  title: 'Prueba de Conocimiento',
  quiz: {
    question: '¿Qué es una DAO?',
    rightAnswerNumber: 1,
    answers: [
      'Una organización gobernada por código y descentralizada',
      'Un token en Ethereum',
      'Una herramienta de desarrollo de contratos inteligentes',
      'Un estándar para tokens no fungibles'
    ],
    id: 'daos-1'
  }
},

// Problemas con el almacenamiento de datos tradicional
{
  type: 'LEARN',
  notionId: 'notion19',
  title: 'Problemas con el Almacenamiento de Datos Tradicional',
  content: '<div class="bloc1"><p>El almacenamiento de datos tradicional suele ser centralizado, lo que significa que los datos están almacenados en servidores controlados por una sola entidad. Esto puede llevar a problemas de seguridad, ya que los datos pueden ser vulnerables a ataques. Además, los usuarios a menudo tienen que confiar en terceros para mantener sus datos seguros, lo que puede llevar a problemas de privacidad.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Soluciones de almacenamiento de datos descentralizadas
{
  type: 'LEARN',
  notionId: 'notion20',
  title: 'Soluciones de Almacenamiento de Datos Descentralizadas',
  content: '<div class="bloc1"><p>Las soluciones de almacenamiento de datos descentralizadas, como IPFS y Filecoin, ofrecen una alternativa a las soluciones de almacenamiento de datos centralizadas. Estas soluciones permiten el almacenamiento de datos en una red descentralizada de nodos, lo que aumenta la seguridad y la resistencia a los ataques. Además, ya que los datos están descentralizados, los usuarios tienen un mayor control sobre sus propios datos.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Integrar el almacenamiento de datos descentralizado en las DApps
{
  type: 'LEARN',
  notionId: 'notion21',
  title: 'Integrar el Almacenamiento de Datos Descentralizado en las DApps',
  content: '<div class="bloc1"><p>El almacenamiento de datos descentralizado puede ser integrado en las DApps para mejorar su seguridad y privacidad. Por ejemplo, una DApp podría utilizar IPFS para almacenar los datos del usuario de manera descentralizada, lo que permitiría al usuario mantener el control total sobre sus datos.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Quiz
{
  type: 'QUIZ',
  notionId: 'quiz7',
  title: 'Prueba de Conocimiento',
  quiz: {
    question: '¿Qué es IPFS?',
    rightAnswerNumber: 1,
    answers: [
      'Un sistema de almacenamiento de datos descentralizado',
      'Un lenguaje de programación',
      'Un contrato inteligente en Ethereum',
      'Un tipo de criptomoneda'
    ],
    id: 'decentralized-data-storage-1'
  }
},

// Desafíos de escalabilidad en blockchain
{
  type: 'LEARN',
  notionId: 'notion22',
  title: 'Desafíos de Escalabilidad en Blockchain',
  content: '<div class="bloc1"><p>Una de las mayores preocupaciones en blockchain es la escalabilidad. A medida que más usuarios se unen a una blockchain, el tiempo y los recursos necesarios para procesar transacciones pueden aumentar. Esto puede llevar a tiempos de transacción lentos y altos costos de gas en redes como Ethereum.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Qué son las sidechains y cómo ayudan con la escalabilidad
{
  type: 'LEARN',
  notionId: 'notion23',
  title: 'Sidechains y la Escalabilidad',
  content: '<div class="bloc1"><p>Las sidechains son cadenas de bloques independientes que se ejecutan en paralelo a la cadena de bloques principal. Permiten el procesamiento de transacciones fuera de la cadena principal, lo que puede mejorar la escalabilidad al reducir la carga en la cadena principal. Ejemplos de sidechains y soluciones de segunda capa incluyen Polygon, Arbitrum, Optimism, y Binance Smart Chain.</p></div>'
  },

// Implementar sidechains en DApps
{
  type: 'LEARN',
  notionId: 'notion24',
  title: 'Implementar Sidechains en DApps',
  content: '<div class="bloc1"><p>Las DApps pueden aprovechar las sidechains para mejorar su escalabilidad. Por ejemplo, una DApp podría utilizar una sidechain para procesar transacciones rápidas y de bajo costo, mientras que las transacciones más importantes podrían ser procesadas en la cadena de bloques principal.</p></div><div class="bloc2"><img src=\'/placeholder-image.svg\'></div>'
},

// Quiz
{
  type: 'QUIZ',
  notionId: 'quiz8',
  title: 'Prueba de Conocimiento',
  quiz: {
    question: '¿Cómo ayudan las sidechains con la escalabilidad en blockchain?',
    rightAnswerNumber: 3,
    answers: [
      'Incrementando el tamaño del bloque',
      'Reduciendo el tiempo de bloque',
      'Permitiendo el procesamiento de transacciones fuera de la cadena principal',
      'Incrementando el costo del gas'
    ],
    id: 'sidechains-1'
  }
},
       
    ]
    
  },
  {
    kudosImageLink: '/badges/badge-celebrate.png',
    lessonImageLink: '/lesson/kudos-testing/lesson-03a3e86a.png',
    socialImageLink: '/lesson/kudos-testing/social-17fed266.png',
    learningActions: '',
    marketingDescription: 'For testing purposes only',
    kudosId: 14067,
    duration: null,
    learnings: '',
    difficulty: undefined,
    description: 'For testing purposes only',
    name: 'Kudos testing',
    quest: 'KudosTesting',
    publicationStatus: 'hidden',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '7bc2bf9be4ac4e9181782f996a2a6060',
    slug: 'kudos-testing',
    imageLinks: [],
    slides: [
      {
        type: 'LEARN',
        title: 'TODO',
        content: '<div class="bloc1"><p>slide content</p></div>'
      },
      {
        type: 'QUEST',
        title: 'Kudos testing Quest',
        component: 'KudosTesting'
      },
      {
        type: 'END',
        title: 'Lesson Reward'
      }
    ]
  }
]

export default LESSONS
