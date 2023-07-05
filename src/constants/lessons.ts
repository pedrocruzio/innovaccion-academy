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
    description: 'Crea y gestiona de forma segura tu primera billetera de criptomonedas.',
    name: 'Crea tu wallet de crypto',
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
        title: '¿Qué es un billetera?',
        content: '<div class="bloc1"><p><strong>¡Saludos!</strong></p><p>Bienvenido a la academia de Web3. Estamos emocionados de guiarte en tu viaje al <code>Web3</code>. Para comenzar, necesitarás un equipo esencial: una billetera digital.</p><p>Una billetera digital es tu pasaporte para explorar los diversos mundos del Web3. Esta herramienta te permite acceder a increíbles nuevas posibilidades mientras proteges tus activos e identidad.</p><p>En esta lección, te presentaremos las billeteras digitales, cómo funcionan y cómo configurar la tuya para embarcarte de manera segura en tu viaje Web3.</p><p>¡Empecemos!</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/wallet-intro-7b45d75e.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'baf157b016ba48a890eb4cacb4b903e5',
        title: 'Billetera',
        content: '<div class="bloc1"><p>En el mundo de las criptomonedas, una billetera se refiere a una aplicación o dispositivo que puedes utilizar para interactuar con una <code>blockchain</code>.</p><p>Tu <code>billetera</code> funciona como una caja de seguridad que protege tu acceso a la blockchain.</p><p>Cuando tu billetera está conectada a una blockchain, puedes realizar compras, transferir activos digitales, interactuar con aplicaciones y más.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/wallet-definition-e8f8f9a8.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '100f6d3d7cd542889814cf17733e9960',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Qué es un billetera?',
          rightAnswerNumber: 4,
          answers: [
            'Un dispositivo equipado con tecnología RFID',
            'Un dispositivo billetera bi-fold con cierre de velcro',
            'Una cuenta que protege mis activos',
            'Una aplicación o dispositivo utilizado para interactuar con una cadena de bloques'
          ],
          id: 'wallet-basics-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'f764c92b0620495981b32bd34dd1fc62',
        title: 'Frase de Recuperación',
        content: '<div class="bloc1"><p>Cuando configuras una nueva <code>billetera</code>, el software genera una <code>frase de recuperación</code> única que es específica de esa cuenta de billetera.</p><p>También llamada a veces una <em>frase de semilla</em> o <em>frase de recuperación secreta</em>, su frase de recuperación se puede usar para acceder a su billetera y activos de criptomonedas si:</p><ul><li>Su aplicación de billetera o hardware falla inesperadamente o se daña.</li><li>No puede acceder a ella debido a extravío o robo.</li><li>Desea acceder a su cuenta de billetera a través de la aplicación de billetera en una computadora o dispositivo diferente.</li></ul><p>La mayoría de las frases de recuperación son una lista de 12 a 24 palabras que representan una pieza única de datos. Esa información se utiliza para generar la <code>clave pública</code> y <code>clave privada</code> de su billetera.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/recovery-phrase-c2d8fa26.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9d0454d30e60454397b0926523f7e73c',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Qué puedes hacer con tu frase de recuperación?',
          rightAnswerNumber: 3,
          answers: [
          '[A] Recuperar tu billetera si se pierde, se roba o se daña',
          '[B] Acceder a tu billetera en múltiples dispositivos',
          '[C] Ambas opciones A y B',
          '[D] Ninguna de las anteriores'
          ],
          id: 'wallet-basics-2'
          }
      },
      {
        type: 'LEARN',
        notionId: 'bf1bf37ca61845c5a4257cbaeff0e13c',
        title: 'Clave Pública',
        content: '<div class="bloc1"><p>Acabas de aprender cómo tu <code>frase de recuperación</code> se relaciona con una <code>clave pública</code> y <code>clave privada</code>.</p><p>Ten en cuenta que una billetera puede contener varias cuentas, y <em>cada cuenta</em> tiene un par único de claves pública y privada.</p><p>Imagina una clave pública como tu dirección de casa. Es pública, cualquier persona puede verla, e identifica la ubicación a la que enviar los activos de criptomonedas.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/public-key-b6387071.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a6dab3c7c04949baa0c5448f57c91cfe',
        title: 'Clave Privada',
        content: '<div class="bloc1"><p>Si tu <code>clave pública</code> es como tu dirección de casa, entonces tu <code>clave privada</code> es como tu llave de casa.</p><p>Se llama privada porque <em>sólo tú</em> deberías tener acceso a ella.</p><p>La clave privada desbloquea el acceso a tu billetera y tus activos de criptomonedas, permitiéndote enviarlos a otras direcciones de billetera.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/private-key-ca271641.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4997e321e0814dd2931dd21c664533d6',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: 'Tu clave pública es como tu _____ y tu clave privada es como tu _____',
          rightAnswerNumber: 2,
          answers: [
            'Número de ruta / número de cuenta',
            'Dirección de casa / llave de casa',
            'Dirección / Código postal',
            'Número de teléfono / Número de Seguro Social'
          ],
          id: 'wallet-basics-3'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a92f95a2da2a4429942b6aad2a260e1b',
        title: 'Billetera Custodial',
        content: '<div class="bloc1"><p>Dado que tu <code>clave privada</code> desbloquea el acceso a tu <code>wallet</code>, mantenerla privada y segura es muy importante.</p><p>No todos los wallets te permiten controlar tu clave privada. Con un <code>wallet custodial</code>, otra parte la controla. Coinbase y Kraken son ejemplos de wallets custodiales que tienen tu clave privada.</p><p>Esto puede ser todo lo que algunas personas necesiten, pero requiere que confíes en terceros para asegurar tus criptoactivos y darte acceso cuando quieras comerciar o enviarlos a otro lugar. Además, tu acceso al mundo de aplicaciones <code>DeFi</code> será limitado.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/custodial-wallet-0538644f.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '39f830da64fb47608592eff742239223',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Controlas tu clave privada con un wallet custodial?',
          rightAnswerNumber: 2,
          answers: [
            'Sí',
            'No'
          ],
          id: 'wallet-basics-4'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a78db356b36c4bb19a85af61170b2471',
        title: 'Non-custodial Wallet',
        content: '<div class="bloc1"><p>Tu pasaporte a los emocionantes mundos de <code>DeFi</code> y <code>Web3</code> - y la mejor manera de proteger tu <code>clave privada</code> es mediante un <code>wallet no custodial</code>.</p><p>Recuerda: si pierdes tu clave privada, no podrás acceder a tu wallet para gastar, retirar o transferir tus activos criptográficos.</p><p>Afortunadamente, aún puedes recuperar tu wallet con tu <code>frase de recuperación</code>. Pero si también pierdes eso, ¡perderás el acceso a tu wallet PARA SIEMPRE!</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/non-custodial-wallet-aee2708b.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4c2cc8a6d61247cc87007cfa636ea77f',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Eres responsable de tu clave privada con una billetera no custodial?',
          rightAnswerNumber: 1,
          answers: [
            'Sí',
            'No'
          ],
          id: 'wallet-basics-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '266abc84862f425bab294dc99dfddb04',
        title: 'Seguridad con su billetera',
        content: '<div class="bloc1"><h2>SIEMPRE haga lo siguiente para proteger su frase de recuperación:</h2><p>✅ escriba su frase en papel</p><p>✅ use un material duradero (como papel laminado o metal grabado)</p><p>✅ guárdelo en un lugar seguro</p><h2>NUNCA haga lo siguiente para proteger su frase de recuperación:</h2><p>🛑 guarde su frase de recuperación en un servicio de almacenamiento en línea</p><p>🛑 capture una imagen de su clave privada</p><p>🛑 revele su frase de recuperación a nadie</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '8356a2b7d25c420fb4171ee574f7d748',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Cuál es la forma más segura de proteger su frase de recuperación?',
          rightAnswerNumber: 4,
          answers: [
            'Guardarlo en tu computadora e imprimirlo.',
            'Tomar una captura de pantalla y guardarla en tu teléfono.',
            'Guardarlo en tu cuenta de Dropbox.',
            'Escribirlo en un material duradero y guardarlo en un lugar seguro.'
          ],
          id: 'wallet-basics-6'
        }
      },
      {
        type: 'LEARN',
        notionId: '6c2cef180a894009807af59ed2d5f27c',
        title: 'Billetera Caliente',
        content: '<div class="bloc1"><p>Hay dos tipos principales de <code>billeteras no custodiadas</code>: billeteras de software (también llamadas <code>billeteras calientes</code>) y billeteras de hardware (también llamadas <code>billeteras frías</code>)</p><p>Una billetera de software es una aplicación o extensión de navegador que permanece conectada a internet.</p><ul><li>VENTAJAS 👍: Por lo general, es gratis, fácil de configurar y fácil de usar.</li><li>DESVENTAJAS 👎: Debido a que es un software conectado a internet, es potencialmente un objetivo para los hackers.</li></ul></div><div class="bloc2"><img src=\'/lesson/wallet-basics/hot-wallet-1d444d7c.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '2db8d9f5695b4b46aa35bef2e17bcb75',
        title: 'Billetera Fría',
        content: '<div class="bloc1"><p>Una <code>billetera fría</code>, o billetera de hardware, solo se conecta a Internet cuando la conectas físicamente a una computadora o dispositivo.</p><ul><li>PROS 👍: Es más segura contra amenazas como hacking.</li><li>CONS 👎: No es gratuita, no es ideal para transacciones rápidas y puede ser engorrosa de usar.</li></ul></div><div class="bloc2"><img src=\'/lesson/wallet-basics/cold-wallet-59646edb.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e331357c6b07425c8451d2a81c20f885',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: '¿Una billetera fría es más segura que una billetera caliente?',
          rightAnswerNumber: 1,
          answers: [
            'Sí',
            'No'
          ],
          id: 'wallet-basics-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '66d21ca797f44f02861545e2042582c8',
        title: 'MetaMask Wallet',
        content: '<div class="bloc1"><p>Existen varias <code>billeteras calientes</code> <code>no custodiales</code> disponibles hoy en día. Exploraremos la popular Billetera MetaMask para el resto de esta lección ya que:</p><ul><li>Es probable que sea compatible con la mayoría de las aplicaciones de <code>DeFi</code>.</li><li>Tiene una extensión de navegador para los navegadores de internet Chrome, Brave, Edge y Firefox.</li><li>También está disponible como una aplicación móvil para usuarios de Android e iOS.</li></ul></div><div class="bloc2"><img src=\'/lesson/wallet-basics/metamask-wallet-521de184.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e60c91b7bb054ea8b4e449ddf6f1042b',
        title: 'Prueba de Conocimiento',
        quiz: {
          question: 'Is MetaMask a custodial wallet?',
          rightAnswerNumber: 2,
          answers: [
            'Sí',
            'No'
          ],
          id: 'wallet-basics-8'
        }
      },
      // {
      //   type: 'QUEST',
      //   title: 'Billeteras',
      //   component: 'WalletBasics'
      // },
      {
        type: 'END',
        title: 'Certificado'
      }
    ]
  },
  {
    kudosImageLink: '/lesson/blockchain-basics/kudos-b0048cdb.png',
    lessonImageLink: '/courses/course-web3-intro.png',
    socialImageLink: '/lesson/blockchain-basics/social-07ea2639.jpg',
    learningActions: '',
    marketingDescription: 'Blockchains make cryptocurrency, DeFi, and Web3 possible. Discover how blockchain networks are built and how they work.',
    kudosId: 2563,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Aprende sobre la arquitectura fundamental de la tecnología blockchain.',
    name: 'Fundamentos de Blockchain',
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
        title: "<strong>Introducción</strong>",
        content: "<div class=bloc1><p><code>La tecnología Blockchain</code> es una forma revolucionaria de almacenar y rastrear datos, a la vez que hace accesibles esos datos para cualquier persona. Es una forma de organizar los datos en una lista pública única de todas las transacciones históricas que cualquiera puede ver pero no puede editar. Esta lista pública de transacciones se conoce colectivamente como el <code>registro</code> de blockchain.</p><p>Después de examinar las capas de una blockchain, usaremos una herramienta de blockchain llamada un <code>explorador de bloques</code> para analizar las especificidades de la estructura de la blockchain de Ethereum; nos centraremos en la blockchain de Ethereum para ver la <strong>lista</strong> de bloques, las <strong>transacciones</strong> dentro de esos bloques, y los <strong>detalles</strong> de cada transacción individual.</p></div><div class=bloc2><img src='/lesson/blockchain-basics/introduction-6d0b6137.svg'></div>"
      },      
      {
        type: "LEARN",
        notionId: "76f2f8016f44493eb57a3139cb515017",
        title: "Estructura de Blockchain",
        content: "<div class=bloc1><p>El término blockchain puede usarse como sustantivo — la blockchain de Bitcoin — o como adjetivo — tecnología blockchain. De cualquier manera, <code>blockchain</code> se refiere a toda la estructura en la que se basan las criptomonedas.</p><p>Si nos acercamos desde el exterior, hay 3 niveles de estructura en una blockchain:</p><ol><li>La <code>blockchain</code> general se compone de bloques que están vinculados en orden</li><li>Los <code>bloques</code> se componen de grupos de transacciones agrupadas </li><li>Las <code>transacciones</code> son cantidades de dinero enviadas entre dos <code>direcciones</code> en la red</li></ol><p>Esta estructura de tres niveles se une para crear un registro criptográfico - un historial inalterable de todas las transacciones realizadas en la red.</p></div><div class=bloc2><img src='/lesson/blockchain-basics/blockchain-structure-346dae14.svg'></div>"
      },
      {
        type: "QUIZ",
        notionId: "f98dfb3cfba44c0ba527d7a60df88aae",
        title: "Prueba de Conocimiento",
        quiz: {
          question: "¿Qué es una blockchain?",
          rightAnswerNumber: 4,
          answers: [
            "Grupos organizados de transacciones llamados bloques",
            "Una lista de cantidades de dinero enviadas entre dos direcciones",
            "Bloques vinculados en secuencia",
            "Todo lo anterior"
          ],
          id: "blockchain-basics-1"
        }
      },      
      {
        type: "LEARN",
        notionId: "edad96fceca6484eb72f5b301f33dea2",
        title: "Examinando el Libro Mayor",
        content: "<div class=bloc1><p>En los sistemas monetarios típicos, confiamos en terceros como los bancos para llevar la cuenta de cuánto dinero tiene cada persona. Pero, para ser verdaderamente sin bancos, queremos un sistema que no nos obligue a confiar en una entidad para gestionar el libro mayor.</p><p>El <code>libro mayor</code> es la lista de TODAS las transacciones realizadas en una blockchain, y cualquiera puede verlo para las blockchains <code>públicas</code>. Grupos discretos de transacciones del libro mayor forman los bloques que juntos componen la blockchain.</p><p>Cuando se añaden nuevas transacciones al libro mayor, se actualizan los saldos almacenados en cada <code>dirección</code>; las transacciones pasadas no pueden ser alteradas. Es como permitir que todos miren el historial de transacciones de todas las cuentas bancarias de todos, en cualquier momento, para siempre. </p></div><div class=bloc2><img src='/lesson/blockchain-basics/examining-the-ledger-74e5f072.svg'></div>"
      },
      {
        type: "LEARN",
        notionId: "1af211fce04445b18b017c8ede82fe09",
        title: "Transacciones en el Libro Mayor",
        content: "<div class=bloc1><p>Vamos a ver algunas transacciones de ejemplo:</p><ul><li>Alice envía 5 ETH a Bob</li><li>Bob envía 2 ETH a Charlie</li></ul><p>Las transacciones individuales muestran el <em>cambio</em> en la cantidad de criptomonedas para cada dirección, por lo que el resultado total de todas las transacciones ES la cantidad de criptomonedas que cada dirección tiene.</p><hr><p>⇒ Alice ha perdido 5 ETH</p><p>⇒ Bob ha ganado un total de 3 ETH (recibió 5, envió 2)</p><p>⇒ Charlie ha ganado 2 ETH</p></div><div class=bloc2><img src='/lesson/blockchain-basics/transactions-on-the-ledger-f4f9d470.svg'></div>"
      },
      {
        type: "QUIZ",
        notionId: "07e7cd73bf0b44af9cc46350430df624",
        title: "Prueba de Conocimiento",
        quiz: {
          question: "¿Cuál de las siguientes afirmaciones es/son verdaderas para los libros mayores de blockchain públicos?",
          rightAnswerNumber: 4,
          answers: [
            "Todas las transacciones son públicas y las transacciones pasadas son inalterables",
            "El libro mayor rastrea cuánta criptomoneda tiene actualmente cada dirección",
            "El libro mayor crece a medida que se añaden nuevas transacciones a él",
            "Todas las anteriores"
          ],
          id: "blockchain-basics-2"
        }
      },
      {
        type: "LEARN",
        notionId: "c344b7d4cf204ce1a627e1c3ea21d299",
        title: "Descentralización",
        content: "<div class=\"bloc1\"><p>Las transacciones incluidas en el registro <code>blockchain</code> no solo son inmutables, sino que también se comparten y distribuyen entre una gran red de computadoras. Para asegurarse de que ninguna entidad tenga el poder de cambiar los datos, el registro de blockchain se almacena en cada dispositivo, llamado <code>nodo</code>, en la red.</p><p>Estos datos compartidos son los que hacen que el registro de blockchain sea <code>descentralizado</code>. Ninguna autoridad o entidad única controla los datos. Blockchains como Ethereum también son <code>públicos</code> porque cualquiera puede ver el registro. </p><p>Veremos detalles específicos sobre cómo se agrega nuevos datos y cómo nos aseguramos de que todos tengan una copia de los mismos datos todo el tiempo en nuestra próxima lección de Teoría de Blockchain. Para esta lección, solo recuerde que los datos del registro son compartidos por cada computadora que ejecuta en la red de Ethereum.</p></div>"
      },
      {
        type: "QUIZ",
        notionId: "4073ac46370144d2919367efcef7ee37",
        title: "Prueba de Conocimiento",
        quiz: {
          question: "¿Qué hace que una blockchain sea descentralizada?",
          rightAnswerNumber: 3,
          answers: [
            "Solo una entidad puede escribir en la blockchain",
            "Cumple con los requisitos de descentralización establecidos por el gobierno",
            "Ninguna autoridad o entidad única controla el registro ni el acceso a los datos del registro porque se distribuye en una gran red de computadoras",
            "El registro se almacena en un solo servidor seguro"
          ],
          id: "blockchain-basics-3"
        }
      },
      {
        type: "LEARN",
        notionId: "6d45c90a4b094caa8d1c8d2c71523284",
        title: "Anatomía de un bloque",
        content: "<div class=\"bloc1\"><p>Una característica importante de las blockchains es que los datos de transacciones pasadas no pueden cambiarse después de haber sido incluidos en un bloque. Esto se debe a que cada bloque tiene un <code>hash de bloque</code> único, como una huella dactilar, que se utiliza para vincular los bloques uno después del otro. Nadie puede cambiar las transacciones pasadas sin cambiar esa huella dactilar y la huella dactilar de CADA bloque que la sigue, porque cada huella dactilar depende de la anterior.</p><p>Entonces cada <code>bloque</code> es simplemente un grupo de transacciones agrupadas en un archivo junto con el <code>hash de bloque</code> de ese bloque. Los bloques están encadenados porque cada uno referencia la huella dactilar única del bloque anterior para formar una cadena de bloques conectada.</p></div><div class=\"bloc2\"><img src='/lesson/blockchain-basics/block-anatomy-8ba3bea2.svg'></div>"
      },
      {
        type: "QUIZ",
        notionId: "47a59ed5d3814cbdb5806331b37d6766",
        title: "Prueba de Conocimiento",
        quiz: {
          question: "¿Cuál es el propósito de un hash de bloque?",
          rightAnswerNumber: 2,
          answers: [
            "Para cifrar los datos del bloque para que nadie pueda leerlos",
            "Para vincular cada bloque con el anterior y asegurar que los datos de las transacciones pasadas no cambien",
            "Para asegurar que las transacciones se envíen a la dirección correcta",
            "Para asegurar que la blockchain permanezca descentralizada"
          ],
          id: "blockchain-basics-4"
        }
      },
      {
        type: "LEARN",
        notionId: "6f1cc1133e8e4b86b3579fb4d4eb4a1c",
        title: "Dentro de un Bloque",
        content: "<div class=\"bloc1\"><p>Recuerda, los datos de un <code>bloque</code> son simplemente un grupo de transacciones agrupadas. Mirando dentro de un solo bloque, vemos una lista de transacciones y algunos datos sobre quién creó el bloque. </p><p>De nuestro ejemplo anterior al discutir el registro de blockchain, ambas transacciones podrían agruparse dentro de un bloque, o distribuirse en varios bloques a lo largo del tiempo. Pero sin importar en qué bloque se incluyan, todos se agregan al registro general de blockchain eventualmente.</p><ul><li>Alice envía 5 ETH a Bob</li><li>Bob envía 2 ETH a Charlie</li></ul><p>Recuerda que cada bloque también debe hacer referencia al <code>hash de bloque</code> del bloque pasado para vincular la blockchain.</p></div><div class=\"bloc2\"><img src='/lesson/blockchain-basics/inside-a-block-b11c74ce.svg'></div>"
      },
      {
        type: "QUIZ",
        notionId: "311096618ecd451ba65677f2c3139823",
        title: "Prueba de Conocimiento",
        quiz: {
          question: "La siguiente información se contiene en un bloque:",
          rightAnswerNumber: 3,
          answers: [
            "Toda la información contenida en los bloques anteriores, para que la blockchain siempre esté actualizada",
            "Cualquier cosa relevante para la blockchain ya que el tamaño del bloque es ilimitado",
            "Datos de transacción y una referencia al bloque anterior",
            "Todos los datos de transacciones generados dentro de un plazo fijo"
          ],
          id: "blockchain-basics-5"
        }
      },
      {
        type: "LEARN",
        notionId: "a9a1ce74d04c439f97249b2000964e5e",
        title: "Transacciones Individuales",
        content: "<div class=\"bloc1\"><p>Los datos en cualquier blockchain son simplemente una lista de <code>transacciones</code>, registros de moneda movidos entre usuarios. Cada transacción debe ser firmada con la <code>firma digital</code> del remitente para ser válida. </p><p>Esto es lo que haces cuando confirmas una transacción con una billetera, estás firmando con tu firma digital para autorizar la transacción. Cualquiera puede verificar esta firma para confirmar que proviene del titular de la billetera, sin que el titular necesite revelar su clave privada. </p><p>La billetera también calcula la cantidad de <code>gas</code> necesaria para la transacción y te permite ajustar la cantidad de gas y el precio del gas para la transacción. Esta es la tarifa que se paga por incluir la transacción en el blockchain. </p></div><div class=\"bloc2\"><img src='/lesson/blockchain-basics/single-transaction-ffc6b7e2.svg'></div>"
      },
      {
        type: "QUIZ",
        notionId: "a2f62f4553ca46a79e55a290f7a74e91",
        title: "Prueba de Conocimiento",
        quiz: {
          question: "¿Cuál es la función de la firma digital en una transacción blockchain?",
          rightAnswerNumber: 1,
          answers: [
            "Autoriza la transacción y permite su verificación sin revelar la clave privada del remitente",
            "Cifra la transacción para que nadie pueda leerla",
            "Calcula la cantidad de gas necesaria para la transacción",
            "Actúa como un código PIN para desbloquear la billetera"
          ],
          id: "blockchain-basics-6"
        }
      },
      {
        type: "LEARN",
        notionId: "b4f0ce31ff20480aa97dd69b2c7b091c",
        title: "Direcciones de Usuario",
        content: "<div class=\"bloc1\"><p>Una <code>dirección</code> es un identificador público que cualquiera puede buscar en la blockchain. Como una dirección de correo electrónico, cualquiera puede enviar fondos a ella, pero solo alguien que controle la <code>llave privada</code> puede desbloquear y usar los fondos de esa dirección.</p><p>En Ethereum, una dirección siempre comienza con <em>0x_________</em> y consta de 42 caracteres de números y letras derivados de la <code>llave pública</code> de esa dirección.</p><p>Cuando se observa una sola transacción en un explorador de bloques, podemos ver las direcciones 'De:' y 'Para:'. Esto no nos dice quiénes son las <em>personas</em> que controlan esas direcciones, pero permite a cualquier usuario rastrear el movimiento de la criptomoneda a través del registro de la blockchain.</p></div><div class=\"bloc2\"><img src='/lesson/blockchain-basics/user-addresses-e9456d37.svg'></div>"
      },
      {
        type: "QUIZ",
        notionId: "5a6cfd2b2a9c4a059253b7f23ba3f74c",
        title: "Prueba de Conocimiento",
        quiz: {
          question: "¿Qué es cierto sobre las direcciones de blockchain?",
          rightAnswerNumber: 4,
          answers: [
            "Son los identificadores públicos de diferentes entidades en una blockchain",
            "Siempre comienzan con 0x en Ethereum",
            "Quien controla la llave privada de una dirección puede usar los fondos de esa dirección",
            "Todo lo anterior"
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
    kudosImageLink: '/lesson/intro-to-defi/kudos-b4dab2d4.png',
    lessonImageLink: '/courses/course-defi.png',
    socialImageLink: '/lesson/intro-to-defi/social-ee8d95a4.jpg',
    learningActions: 'Transfer crypto into your web3 wallet in order to be ready to interact with DeFi later',
    marketingDescription: 'Move beyond centralized exchanges and start exploring the ever-expanding possibilities of decentralized finance.',
    kudosId: 2562,
    duration: 10,
    learnings: '',
    difficulty: 'Easy',
    description: 'Comprende los fundamentos de las finanzas descentralizadas.',
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
        title: 'Definido DeFi',
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
    kudosImageLink: null,
    lessonImageLink: '/courses/course-dex.png',
    learningActions: '',
    marketingDescription: 'DEXs and AMMs have changed the landscape of traditional market trading. It’s time to understand why, and how you can use this technology to your own advantage.',
    kudosId: null,
    duration: 15,
    learnings: '',
    difficulty: undefined,
    description: '¡Descubre cómo los intercambios de contratos inteligentes permiten intercambios de tokens sin necesidad de permisos!',
    name: 'Intercambios Descentralizados (DEXs)',
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
    description: 'Aprende sobre el desarrollo de apps de Web3 (Dapps).',
    name: 'Desarrollo de Apps Web3',
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
    kudosImageLink: '/lesson/kudos-testing/kudos-5e4cda70.png',
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
