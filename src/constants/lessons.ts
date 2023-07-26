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
        title: 'Certificate'
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
        content: '<div class="bloc1"><p>DeFi—short for <code>decentralized finance</code>—refers to the fast-growing ecosystem of financial products, protocols, and applications that operate on public <code>blockchain</code> networks.</p><p>DeFi is rapidly transforming the world of finance with a range of new tools to put crypto assets to work. It offers opportunities beyond just buying crypto on a centralized exchange. It allows each and every one to build a decentralized, bankless lifestyle.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/defi-defined-46782447.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '5d93d188e0274acbb22cc32e433c3b67',
        title: 'Why DeFi?',
        content: '<div class="bloc1"><p>DeFi allows anyone with an internet connection to have access to sophisticated financial tools: Trading, Options, Loans, and Debt.</p><p>DeFi offers these tools to users transparently and openly. Anyone can see the code and verify that the contract does what it says it does, unlike what banks do with your money behind closed doors.</p><p>There are no intermediaries to mediate or take a percentage of your transactions.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '920b875598a34fa59affe46e58ed4e58',
        title: 'Knowledge Check',
        quiz: {
          question: 'What does DeFi mean? ',
          rightAnswerNumber: 2,
          answers: [
            'Derived fiction',
            'Decentralized finance',
            'Deregulation field',
            'Degenerate fishermen'
          ],
          id: 'intro-to-defi-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '772e17d6104145f7969b47fd2e132e68',
        title: '<strong>Yield Farming</strong>',
        content: '<div class="bloc1"><p>There are a growing number of <code>DeFi</code> protocols that allow you to earn interest and other rewards using your crypto assets. You can have access to financial products that you would normally need a bank or a financial services firm to obtain—but without the paperwork, intermediaries, approval process, and other hassles of the traditional financial world.</p><p>By eliminating the middleman, you also eliminate any service fees, quotas, and commissions you would normally pay in the traditional financial world. With DeFi, you keep all the rewards, or yield earned from your assets. That\'s why DeFi is popular. </p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/earning-yield-c5f123f8.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '465a40fdbe24487695394ee1b4a4e97a',
        title: 'Knowledge Check',
        quiz: {
          question: 'How can you earn yield with crypto?',
          rightAnswerNumber: 3,
          answers: [
            '[A] Earning interest by depositing in a DeFi protocol',
            '[B] Earning rewards by depositing in a DeFi protocol',
            '[C] Both, A and B',
            '[D] You cannot earn yield in crypto'
          ],
          id: 'intro-to-defi-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '153a075b1a004f38a9c177486aa95395',
        title: 'What You Can Do With DeFi',
        content: '<div class="bloc1"><p>DeFi transactions are <code>permissionless</code>. This refers to a public <code>blockchain</code> that anyone can use to buy, sell, or exchange assets. No third party controls or oversees the activity. These transactions are carried out by decentralized applications, known as DApps. </p><p>DeFi platforms and DApps allow users to carry out increasingly diverse types of financial transactions, 24/7, worldwide. We will introduce four of the most commonly used opportunities to earn yield in DeFi - investing, trading, lending and borrowing, and staking.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/what-you-can-do-with-defi-9b17cf2e.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '3b77e3afde594c788122db7fe4afab6e',
        title: 'Knowledge Check',
        quiz: {
          question: 'Fill in the blank: DeFi transactions are ____.',
          rightAnswerNumber: 3,
          answers: [
            'Free',
            'Controlled',
            'Permissionless',
            'Centralized'
          ],
          id: 'intro-to-defi-3'
        }
      },      
      {
        type: 'LEARN',
        notionId: '555dff92a9b34743b498f8a01de6ffa4',
        title: '<strong>Investing with DeFi</strong>',
        content: '<div class="bloc1"><p>The most common <code>DeFi</code> transaction is buying some cryptocurrency with the expectation that it will be worth more in the future. This is known as investing.</p><p>HODL is a term used to hold crypto assets for a long time. Depending on who you ask, the HODL meme comes from a typo of HOLD or means <strong>H</strong>old <strong>O</strong>n for <strong>D</strong>ear <strong>L</strong>ife.</p><p>DeFi allows early access to coins and tokens to find and invest, before they are listed on centralized exchanges (CEX).</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/investing-d99a6d1f.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '6dc82def6bab41e2b54efa5a62f941b7',
        title: 'Knowledge Check',
        quiz: {
          question: 'What does HODL mean?',
          rightAnswerNumber: 4,
          answers: [
            'It is a typo of HOLD',
            'Hold On for Dear Life',
            'Hold crypto for a long time',
            'All of the above'
          ],
          id: 'intro-to-defi-4'
        }
      },
      {
        type: 'LEARN',
        notionId: 'b1da9af463c24fd3a1fb8ce6a5b8dfaf',
        title: 'Trading',
        content: '<div class="bloc1"><p>A decentralized exchange (DEX) displays the current exchange rates between different tokens and cryptocurrencies and serves as a digital marketplace that facilitates the trade of one currency for another by bringing together buyers and sellers. </p><p>The parties involved in a DEX trade do not need to know or trust each other. In fact, it may seem like you\'re trading with the DEX. However, in most cases, the DEX creates <code>liquidity pools</code> that facilitate trade between the <code>wallets</code> of two traders in a <code>permissionless</code> manner.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/trading-8cd72977.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '4e1e78e61bc240f0836346fcabb49f54',
        title: 'So what?',
        content: '<div class="bloc1"><p>Anyone can trade and participate in the markets regardless of their net worth. Anyone can enter or exit a position through on-chain protocols.</p></div>'
      },      
      {
        type: 'QUIZ',
        notionId: '1d627556f09143b18edefdf87e059db6',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is a DEX?',
          rightAnswerNumber: 1,
          answers: [
            'A decentralized exchange',
            'A digital electric xylophone',
            'A crypto index fund',
            'None of the above'
          ],
          id: 'intro-to-defi-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '929543eaa9b64ab9b14a6593e95fb9ef',
        title: '<strong>Lending and Borrowing</strong>',
        content: '<div class="bloc1"><p>DeFi lending and borrowing offer loans without the need for a bank or intermediary institution. Instead, the loan is done on a <code>peer-to-peer</code> basis. That means that transactions are between two parties and do not require an intermediary or controlling entity.</p><p>There are <code>DApps</code> that allow anyone to lend and borrow crypto assets. Like traditional loans, a lender will earn interest on the loan and the borrower will have to repay the principal of the loan plus interest.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/lending-borrowing-4fb1c7c3.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '062707cc00eb4fe9830d8f6535e50387',
        title: 'Knowledge Check',
        quiz: {
          question: 'Fill in the blank: DeFi loans are done on a _____ basis.',
          rightAnswerNumber: 2,
          answers: [
            'income to debt',
            'peer-to-peer',
            'banks to customers',
            'income to interest'
          ],
          id: 'intro-to-defi-6'
        }      
      },
      {
        type: 'LEARN',
        notionId: '88ac3e93d3c849db8420b1700884030c',
        title: '<strong>Staking</strong>',
        content: '<div class="bloc1"><p>DeFi staking is similar to lending, however, it is a special type of lending. Instead of lending your crypto to another user on a <code>peer-to-peer</code> basis, you lend your crypto to a network or protocol. In return for helping to secure the network or protocol, you earn rewards.</p><p>Centralized exchanges also offer staking. However, like their trading peers, staking opportunities and rewards are limited. With DeFi, there are many more staking possibilities than exist with centralized exchanges. </p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/staking-b4b4319d.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'ae7f5581ae404a1a83e1542eeee9d945',
        title: 'Knowledge Check',
        quiz: {
          question: 'Lending your crypto to a protocol is an example of?',
          rightAnswerNumber: 3,
          answers: [
            'Trading',
            'Lending',
            'Staking',
            'HODLing'
          ],
          id: 'intro-to-defi-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '9b122d2d398a47428a41838e3bc9a521',
        title: '<strong>Downsides of DeFi</strong>',
        content: '<div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/intro-to-defi/defi-downsides-51dd6225.svg\'></div><div class="bloc-b"><p><strong>Hackers</strong></p><p>Where there is money and technology, there are people looking for ways to hack the system and take advantage of deficient security measures.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/intro-to-defi/defi-downsides-3a6ce496.svg\'></div><div class="bloc-b"><p><strong>Risk</strong></p><p>DeFi, like blockchain technology, operates on code. If there is a mistake or loophole in the code, it can be exploited.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/intro-to-defi/defi-downsides-83a9391f.svg\'></div><div class="bloc-b"><p><strong>No recourse</strong></p><p>Being decentralized also means that there are no companies or government agencies you can ask for help if something goes wrong.</p></div></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4b5bd41ee29942ea8cfc577f2e495baa',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is a risk in DeFi?',
          rightAnswerNumber: 4,
          answers: [
            'There are no risks',
            'The bank may reject your loan',
            'Bad weather could close the exchange',
            'There can be a mistake in the code'
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
        "type": "LEARN",
        "notionId": "cc07e9a8a87744daa6548a95ae696fd2",
        "title": "Introduction",
        "content": "<div class=\"bloc1\"><p><code>Decentralized Exchanges</code> (DEXs) eliminate intermediary costs and save Explorers money when they trade assets. </p><p>But did you know, Explorer, that there are more ways to save with DeFi technology? Using <code>DEX aggregators</code>, you can scan all possible trades on multiple DEX platforms simultaneously and execute the best trading route, all in one action. They help you get the best deal when you do a <code>swap</code> of tokens. Just as airline flight aggregators help you find the cheapest flight, DEX aggregators help you maximize your trade's value.</p><p>This lesson will show:</p><ol><li>How DEXs split liquidity and how this can result in reduced trading rates.</li><li>How DEX aggregators allow users to view and use multiple DEXs through a single interface.</li><li>Multiple ways in which a single aggregator interface can save Explorers time and money.</li></ol></div><div class=\"bloc2\"><img src='/lesson/dex-aggregators/introduction-ba453b68.svg'></div>"
      },
      {
        "type": "LEARN",
        "notionId": "0e59fd1b9b7943a3a70a44abc9e921c1",
        "title": "How Liquidity Affects Prices",
        "content": "<div class=\"bloc1\"><p>The amount of any token that is available for trading in a single market is called the token's <code>liquidity</code>. The amount of liquidity available strongly influences the <code>price impact</code> when making trades in DeFi; a large price impact means the trade will cost more, and a low price impact will cost less. Most people prefer to trade in markets with higher liquidity to reduce their price impact. </p><p>You can think of it like a pool; the more water (liquidity) there is, the smaller the <em>change</em> in the water level (price impact) when someone jumps in or out. The size of that \"someone\" (the trade) also affects the <em>change</em> in the water level (price impact).</p></div>"
      },
      {
        "type": "LEARN",
        "notionId": "8ea31e80fcfc49d3a88ad09d03341c9c",
        "title": "An Example of How Liquidity Impacts Prices",
        "content": "<div class=\"bloc1\"><p>Let's take a look at an example. </p><p>The Wrapped Bitcoin token (WBTC) has a liquidity amount of ~30 million WBTC on Uniswap, but only ~4.5 million WBTC on SushiSwap. Uniswap has over 6 times the WBTC liquidity that SushiSwap does.</p><p>If an Explorer were to buy 10,000 WBTC from each pool, they would find that the <code>price impact</code> of their trade would result in a higher trading price in the SushiSwap pool, because their trade has drawn a larger percentage of the pool's total liquidity.</p></div><div class=\"bloc2\"><img src='/lesson/dex-aggregators/an-example-of-how-liquidity-impacts-prices-915b3d84.svg'></div>"
      },
      {
        "type": "QUIZ",
        "notionId": "c60d776bd01247b79e037003d737f924",
        "title": "Knowledge Check",
        "quiz": {
          "question": "Fill in the blanks: To find the best price, people will want to trade in markets with ________ liquidity to have ________ price impact on their trades.",
          "rightAnswerNumber": 2,
          "answers": [
            "good, maximum",
            "high, low",
            "low, good",
            "scarce, large"
          ],
          "id": "dex-aggregators-1"
        }
      },      
      {
        "type": "LEARN",
        "notionId": "b97afba7b0f44b709f57d6e85ce13cc2",
        "title": "Limitations of Traditional DEXs: Thin Liquidity",
        "content": "<div class=\"bloc1\"><p>DeFi continues to grow, but a problem is emerging for users: As more DEXs are launched, the total amount of any individual token is dispersed. This is known as thin liquidity.</p><p>Remember the pool: if the available water (<code>liquidity</code>) is divided between several pools, the amount of water will be \"thinner\" in each pool compared to the total in the original single pool.</p><p>In 2020, Uniswap had much of the DEX liquidity for trading in DeFi. When SushiSwap launched the following month, it attracted over $1B in liquidity to its DEX from Uniswap, reducing Uniswap's total liquidity. This was just the beginning. Since then, more and more DEXs have entered the DeFi ecosystem, progressively thinning the liquidity of each pool.</p><p>Therefore, any trade has a higher <code>price impact</code> than when Uniswap had the majority of the ecosystem's total liquidity. As more DEXs are launched, it costs Explorers more to trade on any individual DEX without new innovations.</p></div><div class=\"bloc2\"><img src='/lesson/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-c9e0b695.svg'></div>"
      },
      {
        "type": "QUIZ",
        "notionId": "d9969ae7f6c247a097f7b7d419b6c119",
        "title": "Knowledge Check",
        "quiz": {
          "question": "What two factors determine the price impact of a trade on DEX?",
          "rightAnswerNumber": 3,
          "answers": [
            "The choice of DEX used to make the trade and the size of the trade",
            "Which token is chosen to swap and what DEX is used to make the trade",
            "The size of the trade and the amount of available liquidity",
            "The amount of available liquidity and which token is chosen to swap"
          ],
          "id": "dex-aggregators-2"
        }
      },
      {
        "type": "LEARN",
        "notionId": "c06177fa9ee3428c80a9295a8a09a9f2",
        "title": "Recombining Liquidity with DEX Aggregators",
        "content": "<div class=\"bloc1\"><p>Large amounts of <code>liquidity</code> are needed to reduce price impact and save money. DEX aggregators allow users to execute trades across multiple DEXs at once and reduce the price impact; a large trade from an Explorer's wallet is split into multiple smaller trades on multiple DEXs.</p><p>DEX aggregators can even route trades through an <code>intermediary token</code>, or more than one, if that provides a better outcome for users, just like a flight aggregator might suggest an extra stop at another airport if it's cheaper for the passenger. This discovery of the optimal <code>trade route</code> is performed by sophisticated algorithms that search among all possible routes to find the cheapest trade route at that moment.</p></div><div class=\"bloc2\"><img src='/lesson/dex-aggregators/recombining-liquidity-with-dex-aggregators-f01777dd.svg'></div>"
      },
      {
        "type": "QUIZ",
        "notionId": "063815f2667146a2921df5c4c3ca1663",
        "title": "Knowledge Check",
        "quiz": {
          "question": "Trade routing in DEX aggregators means:",
          "rightAnswerNumber": 4,
          "answers": [
            "Trades are directed according to liquidity agreements with specific DEXs",
            "Trades are always routed through multiple DEXs",
            "Trades are directed only through the user's favorite DEX",
            "Trades can be routed through multiple DEXs and intermediary tokens"
          ],
          "id": "dex-aggregators-3"
        }
      },      
      {
        "type": "LEARN",
        "notionId": "1c2f4199a9254d18897593b371ca4d9e",
        "title": "How Gas Cost is Calculated on Ethereum",
        "content": "<div class=\"bloc1\"><p>Before we look at how the optimizations made by DEX aggregators can reduce network fees for users, let's refresh on how gas is calculated.</p><p>Just like gasoline for a car, <code>gas</code> is the fuel to run the blockchain code on Ethereum. The further you travel, the more gas your car uses. Similarly, the more operations you do, the more gas your code requires. The price of gas is measured in very small amounts of Ether called <code>gwei</code>, like cents for a dollar. 1 gwei is a billionth of an ether (1 gwei = 0.00000001 ETH).</p><p>The total gas cost is based on the amount of gas your transaction uses and the unit price of gas at the time of use. The formula to calculate the price of a transaction is the following:<br><em>Amount of gas used * Gas price = Total gas cost</em></p><p>As an example, say the gas costs are at 22 gwei per unit of gas and the transaction uses 120 thousand units:<br><em>120,000 * 22 gwei = 2,640,000 gwei </em><em><strong>or</strong></em><em> 0.00264 ETH</em></p></div><div class=\"bloc2\"><img src='/lesson/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c34efe86.svg'></div>"
      },
      {
        "type": "LEARN",
        "notionId": "7196f021bcc541929d68b9bd0c018ac3",
        "title": "How Aggregators Reduce Gas Costs for Users",
        "content": "<div class=\"bloc1\"><p>Splitting trades would result in more transaction fees due to the extra on-chain activity, except that advanced aggregators plan transaction fees and include them in their trade route calculations. They simulate the trades off-chain, including <code>gas</code> costs, to find <code>trade routes</code> that leave Explorers with the most value at the end of the interaction.</p><p>Some aggregators go even further: they may refund some of the network transaction fees for using their protocol. 1inch currently offers refunds in their token for a portion of gas costs when trading through their <code>dApp</code> on the Ethereum main network.</p></div><div class=\"bloc2\"><img src='/lesson/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-28d6f207.svg'></div>"
      },
      {
        "type": "QUIZ",
        "notionId": "2cf155ee9e3a4d4fb0a9c78f888d2373",
        "title": "Knowledge Check",
        "quiz": {
          "question": "Which of the following is NOT a way DEX aggregators attempt to reduce transaction costs for users?",
          "rightAnswerNumber": 2,
          "answers": [
            "They simulate transactions off-chain before execution of the trade",
            "They ask DEXs to reduce network fees for their users",
            "They take into account the cost of gas in routing trades",
            "Token refunds on gas costs"
          ],
          "id": "dex-aggregators-4"
        }
      },
      {
        "type": "LEARN",
        "notionId": "19eb7c5516fd4da383c48661d21e34a1",
        "title": "Meta-Aggregators",
        "content": "<div class=\"bloc1\"><p>There are even meta-aggregators of DEX aggregators! These platforms search all competitor DEX aggregators and provide price quotes to users. An example of this is the swap feature in the MetaMask wallet app. This feature is actually a meta-aggregator that relies on DEX aggregators like 1inch to function.</p><p>Note: While they are convenient, <code>meta-aggregator</code> services can add extra costs on top of network transaction fees, increasing the total cost for users. Explorers: make sure your trades don't end up costing more than you intended. </p></div><div class=\"bloc2\"><img src='/lesson/dex-aggregators/meta-aggregators-100793fd.svg'></div>"
      },
      {
        "type": "QUIZ",
        "notionId": "7abcec930d924ca997d5f4221fae9ad6",
        "title": "Knowledge Check",
        "quiz": {
          "question": "Meta-aggregators contrast multiple DEX aggregators to find the best prices for their users.",
          "rightAnswerNumber": 1,
          "answers": [
            "True",
            "False"
          ],
          "id": "dex-aggregators-5"
        }
      },
      {
        "type": "LEARN",
        "notionId": "44acd0c428aa49e8880b26f1ffffd0b0",
        "title": "Avoiding Sandwich Attacks",
        "content": "<div class=\"bloc1\"><p>Users trading directly through <code>DEXs</code> can lose value up to the limit of their <code>slippage tolerance</code> due to coordinated price changes by block producers, these kind of losses are called <code>sandwich attacks</code>. Did you know sandwich attacks led users to a total loss of $235,000,000 during 2021? Explorers can protect themselves by keeping a low slippage tolerance when swapping tokens.</p><p>Thankfully, because of the recombined liquidity offered by DEX aggregators, the price impact of a trade is reduced. Explorers can keep their slippage tolerance low while saving more with DEX aggregators, rather than trading directly on a DEX.</p></div><div class=\"bloc2\"><img src='/lesson/dex-aggregators/avoiding-sandwich-attacks-75f6ae82.svg'></div>"
      },
      {
        "type": "QUIZ",
        "notionId": "9864a66638a3473ca13f8ee2dc8c4b1f",
        "title": "Knowledge Check",
        "quiz": {
          "question": "To protect yourself, you should keep your slippage tolerance:",
          "rightAnswerNumber": 1,
          "answers": [
            "low",
            "high"
          ],
          "id": "dex-aggregators-6"
        }
      },
      {
        "type": "LEARN",
        "notionId": "b1756984326242d4ad5e4ab2cbe2eb32",
        "title": "More Sandwich Protection: OTC Trades",
        "content": "<div class=\"bloc1\"><p>Some aggregators like 1inch even offer specialized <code>OTC</code> (Over The Counter) services that provide total protection against sandwich attacks. These optional services allow direct trading with other users, instead of facilitating trades through DeFi <code>liquidity pools</code>. Anyone can participate in <code>OTC</code> trades to completely eliminate the threat of sandwich attacks, providing yet another great way for Explorers to save.</p><p>CoWSwap is a Meta-Aggregator that also offers sandwich-resistant services, enabled by default, to ensure trades are 100% protected against sandwich attacks.</p></div><div class=\"bloc2\"><img src='/lesson/dex-aggregators/more-protection-from-sandwiches-otc-trades-04ef66c9.svg'></div>"
      },
      {
        "type": "QUIZ",
        "notionId": "18f1f2c0e7b84cfbafe1b26e139f0c25",
        "title": "Knowledge Check",
        "quiz": {
          "question": "Many DEX aggregators offer what tool(s) to save money for their users?",
          "rightAnswerNumber": 4,
          "answers": [
            "They route trades through the combined liquidity of multiple DEXs to reduce price impact.",
            "OTC trades that fully protect against sandwich attacks.",
            "They account for gas cost in constructing the best trade routes.",
            "All of the above"
          ],
          "id": "dex-aggregators-7"
        }
      },      
      {
        "type": "END",
        "title": "Certificate"
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
        title: 'Welcome to DApps Development with Web3',
        content: '<div class="bloc1"><p><strong>Greetings!</strong></p><p>Welcome to the Decentralized Applications (DApps) Development with Web3 course. We are excited to help you navigate this exciting and innovative field of blockchain technology. This course is designed to teach you the fundamentals of DApps using Web3 technologies.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'baf157b016ba48a890eb4cacb4b903e5',
        title: 'Blockchain and Smart Contracts',
        content: '<div class="bloc1"><p>Web3 is based on blockchain technologies and smart contracts. The <code>blockchain</code> is a decentralized database, and smart contracts are programs that run on this database.</p><p>Smart contracts allow the creation of decentralized applications (dApps) that operate on the blockchain and are not controlled by a single entity.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '100f6d3d7cd542889814cf17733e9960',
        title: 'Knowledge Test',
        quiz: {
          question: 'What is a smart contract?',
          rightAnswerNumber: 3,
          answers: [
            'A digital legal agreement',
            'A contract that requires a digital signature',
            'A program that runs on the blockchain',
            'A contract with an artificial intelligence entity'
          ],
          id: 'web3-dev-1'
        }
      },
      // Cryptography
      {
        type: 'LEARN',
        notionId: 'notion2',
        title: 'Cryptography in Web3',
        content: '<div class="bloc1"><p>Cryptography is a cornerstone of the security and functionality of Web3. Throughout this section, we will introduce you to the basic concepts of cryptography, how it applies in blockchain and in DApps.</p></div>'
      },
      // Cryptography in Blockchain
      {
        type: 'LEARN',
        notionId: 'notion3',
        title: 'Cryptography in Blockchain',
        content: '<div class="bloc1"><p>Cryptography is essential for the security and functionality of the blockchain. Transactions, the creation of new blocks and data integrity assurance all depend on cryptography. Let\'s explore how cryptography is implemented in a blockchain, and why it\'s so critical.</p></div>'
      },
      // Cryptography in DApps
      {
        type: 'LEARN',
        notionId: 'notion4',
        title: 'Cryptography in DApps',
        content: '<div class="bloc1"><p>In DApps, cryptography not only protects transactions, but can also play a role in application logic, such as in smart contracts. Throughout this section, we will see how cryptography can be applied in DApps and why it is important for their operation.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'quiz2',
        title: 'Knowledge Test',
        quiz: {
          question: 'Why is cryptography important in Web3?',
          rightAnswerNumber: 2,
          answers: [
            'To encrypt email messages',
            'To ensure the security and functionality of blockchain and DApps',
            'To protect against computer viruses',
            'To improve system performance'
          ],
          id: 'crypto-intro-1'
        }
      },
      // SHA-256 in Cryptography
      {
        type: 'LEARN',
        notionId: 'notion5',
        title: 'SHA-256 in Cryptography',
        content: '<div class="bloc1"><p><code>SHA-256</code>, which stands for Secure Hash Algorithm 256, is a cryptographic hash algorithm commonly used in blockchain. In simple terms, it takes any input and converts it into a unique alphanumeric string of fixed length.</p><p>This algorithm is fundamental to ensuring data integrity and security in the blockchain. Each transaction is passed through the SHA-256 algorithm and converted into a hash. This hash is then used to create the digital seal of the transaction, allowing any changes in the transaction to be easily detected as it would change the resulting hash.</p><p>The Bitcoin blockchain, for example, uses SHA-256 for the creation of new blocks and to secure transactions.</p></div>'
      },
      // Introduction to Ethereum
      {
        type: 'LEARN',
        notionId: 'notion8',
        title: 'Introduction to Ethereum',
        content: '<div class="bloc1"><p>Ethereum is an open-source blockchain that allows the creation of smart contracts. These contracts are programs that run on the Ethereum Virtual Machine (EVM), and can automate the transfer of cryptocurrencies under certain conditions.</p><p>Ethereum extends the possibilities of blockchain beyond simple value transfer. With Ethereum, developers can create a variety of applications, from games to financial platforms.</p></div>'
      },
      // Cryptography in Ethereum
      {
        type: 'LEARN',
        notionId: 'notion6',
        title: 'Cryptography in Ethereum',
        content: '<div class="bloc1"><p>The Ethereum network, similar to Bitcoin, also uses cryptography to ensure the security and integrity of transactions. Although Ethereum uses the Ethash algorithm for mining its blocks instead of SHA-256, it employs cryptography in the same crucial way for transaction security.</p><p>Each account on Ethereum has a public key and a private key. The private key is used to sign transactions: when you send Ether or interact with a smart contract, you sign the transaction with your private key.</p><p>This signature can be verified with the public key, but it is mathematically unfeasible to derive the private key from the public key or the signature. This allows transactions to be secure: only the holder of the private key can sign transactions, but anyone can verify those transactions with the public key.</p></div>'
      },
      // Hashes in Ethereum
      {
        type: 'LEARN',
        notionId: 'notion7',
        title: 'Hashes in Ethereum',
        content: '<div class="bloc1"><p>Ethereum uses two cryptographic hash functions: KECCAK-256 and RIPEMD-160. KECCAK-256, also known as SHA-3, is used for most cryptographic operations in Ethereum, including securing transactions and creating addresses.</p><p>KECCAK-256 is very similar to SHA-256 in that it takes any input and outputs a unique hash of fixed length. This hash is then used to create the digital seal of the transaction, allowing any changes in the transaction to be easily detected as it would change the resulting hash.</p><p>RIPEMD-160 is used to create the Ethereum addresses. The public key of an account is passed through KECCAK-256, then the last 20 bytes are taken and passed through RIPEMD-160 to generate the address.</p></div>'
      },
      // Smart Contracts in Ethereum
      {
        type: 'LEARN',
        notionId: 'notion9',
        title: 'Smart Contracts in Ethereum',
        content: '<div class="bloc1"><p>A smart contract is a program that runs on the Ethereum blockchain. It\'s called a contract because the code that composes it can control digital assets. Smart contracts can read other contracts, make decisions, send transactions, and interact with other contracts.</p><p>They are written in a language called Solidity, which is similar to JavaScript. This language allows the writing of complex contracts that can perform various functions.</p><p>Once a contract is deployed to the Ethereum blockchain, it is immutable, meaning it cannot be modified. Therefore, the writing of smart contracts requires a high degree of accuracy and testing.</p></div>'
      },
      // Solidity Basics
      {
        type: 'LEARN',
        notionId: 'notion10',
        title: 'Solidity Basics',
        content: '<div class="bloc1"><p>Solidity is a statically typed, contract-oriented programming language. It is the primary language for the development of smart contracts on the Ethereum platform.</p><p>As a statically typed language, the type of each variable must be specified at compile time. As a contract-oriented language, it allows the creation of complex contracts that can interact with each other.</p><p>Solidity is influenced by C++, Python, and JavaScript and is designed to target the Ethereum Virtual Machine (EVM).</p><p>By learning Solidity, you’ll be able to create a wide range of decentralized applications, from simple token contracts to complex decentralized exchanges.</p></div>'
      },
      // Solidity Development Environment
      {
        type: 'LEARN',
        notionId: 'notion11',
        title: 'Solidity Development Environment',
        content: '<div class="bloc1"><p>When developing with Solidity, there are several tools you can use to make your life easier. These include:</p><ul><li><strong>Remix:</strong> This is a web-based IDE for developing, testing, and deploying smart contracts in Solidity. It also includes a debugger and static analysis tools.</li><li><strong>Truffle:</strong> This is a development framework for Ethereum that helps with contract testing and deployment.</li><li><strong>Ganache:</strong> This is a personal Ethereum blockchain you can use for testing and experimentation. It runs on your local machine and comes with several helpful features.</li><li><strong>MetaMask:</strong> This is a browser-based Ethereum wallet. It allows users to interact with the Ethereum network and DApps from their browser.</li></ul></div>'
      },
      // Writing a Simple Smart Contract
      {
        type: 'LEARN',
        notionId: 'notion12',
        title: 'Writing a Simple Smart Contract',
        content: '<div class="bloc1"><p>In this section, we’ll walk you through the process of writing a simple smart contract. This contract will store a single number and provide two functions: one to set the number and another to get the number.</p><p>First, let’s define our contract:</p><pre><code class="language-solidity">pragma solidity ^0.5.0;\n\ncontract SimpleStorage {\n    uint storedData;\n\n    function set(uint x) public {\n        storedData = x;\n    }\n\n    function get() public view returns (uint) {\n        return storedData;\n    }\n}</code></pre><p>The <code>set</code> function allows us to set the value of <code>storedData</code>, and the <code>get</code> function allows us to retrieve the value of <code>storedData</code>.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'quiz3',
        title: 'Knowledge Test',
        quiz: {
          question: 'Which of the following best describes Solidity?',
          rightAnswerNumber: 3,
          answers: [
            'A dynamically typed, object-oriented programming language',
            'A statically typed, procedural programming language',
            'A statically typed, contract-oriented programming language',
            'A dynamically typed, functional programming language'
          ],
          id: 'solidity-intro-1'
        }
      },
      // Deploying a Smart Contract
      {
        type: 'LEARN',
        notionId: 'notion13',
        title: 'Deploying a Smart Contract',
        content: '<div class="bloc1"><p>Once you have written your smart contract, the next step is to deploy it to the Ethereum network. This can be done through various methods, such as using the Remix IDE, Truffle, or the Web3.js library.</p><p>When deploying, you would usually first deploy to a test network, like the Rinkeby or Ropsten network, before deploying to the main Ethereum network. This allows you to test the functionality of the contract and ensure it is working as expected without risking real Ether.</p><p>Deploying a contract requires paying gas, which is the computational cost of executing operations on the Ethereum network. The cost of gas depends on the complexity of the contract and the current demand on the network.</p></div>'
      },
      // Interacting with a Smart Contract
      {
        type: 'LEARN',
        notionId: 'notion14',
        title: 'Interacting with a Smart Contract',
        content: '<div class="bloc1"><p>Once a contract is deployed, you can interact with it using its address and ABI (Application Binary Interface), which is a specification of how to interact with the contract. The ABI includes the names and types of the contract’s functions and events.</p><p>You can interact with a contract directly from the Ethereum node (if you have one running), or you can use Web3.js or Ethers.js, which are JavaScript libraries that provide a simple and consistent API for interacting with Ethereum.</p><p>You can call the contract’s functions using the call method, and listen to events using the events method. When calling a function that changes the state of the contract, you will need to pay gas.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'quiz4',
        title: 'Knowledge Test',
        quiz: {
          question: 'What is the purpose of the ABI in a smart contract?',
          rightAnswerNumber: 1,
          answers: [
            'It is a specification of how to interact with the contract',
            'It is used to compile the contract',
            'It is used to secure the contract',
            'It is a digital signature of the contract'
          ],
          id: 'contract-interact-1'
        }
      },
      {
        "type": "END",
        "title": "Certificate"
      }
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
        title: 'Certificate'
      }
    ]
  }
]

export default LESSONS
