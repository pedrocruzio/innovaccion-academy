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
    name: 'DEXs and AMMs',
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
        title: 'Introduction',
        content: '<div class="bloc1"><p><code>Decentralized Exchanges</code> (DEXs) eliminate the costs of intermediaries and save Explorers money when trading assets. </p><p>But did you know, Explorer, that there’s more ways to save with DeFi technology? Using <code>DEX aggregators</code>, you can scan all possible trades on various DEX platforms simultaneously and execute the best trade route — all in one action. They help you get the best deal when doing a token <code>swap</code>. Just like airline flight aggregators help you find the cheapest flight, DEX aggregators help you maximize the value of your trade.</p><p>This lesson will show:</p><ol><li>How DEXs split liquidity and how that can result in reduced trading rates.</li><li>How DEX aggregators enable users to view and use multiple DEXs through one interface.</li><li>Multiple ways a single aggregator interface can save Explorers time and money.</li></ol></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/introduction-ba453b68.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '0e59fd1b9b7943a3a70a44abc9e921c1',
        title: 'How Liquidity Affects Prices',
        content: '<div class="bloc1"><p>The amount of any token that is available to trade on a single market is called a token’s <code>liquidity</code>. The amount of liquidity available strongly influences the <code>price impact</code> when making trades in DeFi; a large price impact means the trade will cost more, and a low price impact will cost less. Most people prefer to trade in markets with higher liquidity to reduce their price impact. </p><p>You can think of it like a swimming pool; the more water (liquidity) there is, the smaller the <em>change </em>in the water level (price impact) when someone jumps in or leaves. The size of that ‘someone’ (the trade) also affects the <em>change</em> in the water level (price impact).</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '8ea31e80fcfc49d3a88ad09d03341c9c',
        title: 'An Example of How Liquidity Impacts Prices',
        content: '<div class="bloc1"><p>Let’s look at an example. </p><p>The BanklessDAO token (BANK) has a liquidity amount of ~30 million BANK on Uniswap, but only ~4.5 million BANK on SushiSwap. Uniswap has over 6x the BANK liquidity of SushiSwap.</p><p>If an Explorer was to purchase 10,000 BANK from each pool, they would find that the <code>price impact</code> of their trade would result in a higher trade price in the SushiSwap pool — because their trade has pulled a larger percentage of the pool’s total liquidity.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/an-example-of-how-liquidity-impacts-prices-915b3d84.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'c60d776bd01247b79e037003d737f924',
        title: '✅ Question',
        quiz: {
          question: 'Fill in the blanks: To find the best price, people will want to trade in markets with ________ liquidity to have ________ price impact on their trades.',
          rightAnswerNumber: 2,
          answers: [
            'good, maximum',
            'high, low',
            'low, good',
            'thin, large'
          ],
          id: 'dex-aggregators-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'b97afba7b0f44b709f57d6e85ce13cc2',
        title: 'Shortcomings of Traditional DEXs: Thin Liquidity',
        content: '<div class="bloc1"><p>DeFi continues to grow, but a problem is emerging for users: As more DEXs launch, the total amount of any individual token gets spread out. This is known as thin liquidity.</p><p>Remember the swimming pool: if the available water (<code>liquidity</code>) is split between multiple pools, the amount of water will be “thinner” in each pool compared to the total in the single original pool.</p><p>In 2020, Uniswap held much of the DEX liquidity to trade in DeFi. When SushiSwap launched the following month, it attracted over $1B worth of liquidity into its DEX from Uniswap, reducing total liquidity on Uniswap. This was just the start. Since then, more and more DEXs have entered the DeFi ecosystem, progressively thinning the liquidity of each pool.</p><p>Thus, any trade has a larger <code>price impact</code> than when Uniswap held most of the ecosystem’s total liquidity. As more DEXs launch, it costs Explorers more to trade on any single DEX without new innovations.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-c9e0b695.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'd9969ae7f6c247a097f7b7d419b6c119',
        title: '✅ Question',
        quiz: {
          question: 'Which two factors determine the price impact of a DEX trade?',
          rightAnswerNumber: 3,
          answers: [
            'The choice of DEX is used to make the trade and size of the trade',
            'Which token is chosen to trade and which DEX is used to make the trade',
            'The size of the trade and amount of liquidity available',
            'The amount of liquidity available and which token is chosen to trade'
          ],
          id: 'dex-aggregators-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'c06177fa9ee3428c80a9295a8a09a9f2',
        title: 'Recombining Liquidity With DEX Aggregators',
        content: '<div class="bloc1"><p>Large amounts of <code>liquidity</code> are needed to reduce price impact and save you money. DEX aggregators allow users to run trades through multiple DEXs at once and reduce the price impact; a big trade from an Explorer’s wallet gets broken down into multiple small trades across multiple DEXs.</p><p>DEX aggregators can even route trades through an <code>intermediary token</code> , or more than one, if that gets a better result for users — like the way a flight aggregator might suggest an extra stop at another airport if it’s cheaper for the passenger. This discovery of the optimal <code>trade route</code> is done by sophisticated algorithms searching through all possible paths to find the cheapest trade route at that moment.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/recombining-liquidity-with-dex-aggregators-f01777dd.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '063815f2667146a2921df5c4c3ca1663',
        title: '✅ Question',
        quiz: {
          question: 'Trade routing in DEX aggregators means:',
          rightAnswerNumber: 4,
          answers: [
            'Trades are routed according to liquidity arrangements with specific DEXs',
            'Trades are always routed through multiple DEXs',
            'Trades are routed through a user’s favorite DEX only',
            'Trades can be routed through multiple DEXs and intermediary tokens'
          ],
          id: 'dex-aggregators-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '1c2f4199a9254d18897593b371ca4d9e',
        title: 'How Gas Cost Is Calculated on Ethereum',
        content: '<div class="bloc1"><p>Let’s refresh how gas is calculated before we go on to see how the optimizations DEX aggregators make can reduce network fees for users.</p><p>Just like gas for a car, <code>gas</code> is the fuel for running blockchain code on Ethereum. The farther you travel, the more gas your car uses. Likewise, the more computations you do, the more gas your code requires. Gas price is measured in very small amounts of Ether called <code>gwei</code>, like cents to a dollar. 1 gwei is 1 billionth of an ether (1 gwei = 0.00000001 ETH). </p><p>Total gas cost is based on how much gas your transaction uses and the unit price of gas at the time of use. The formula for calculating the price of a transaction is as follows:<br><em>Amount of gas used * Gas price = Total gas cost</em></p><p>As an example, let’s say gas costs are at 22 gwei per gas unit and the transaction uses 120-thousand units:<br><em>120,000 * 22 gwei = 2,640,000 gwei </em><em><strong>or</strong></em><em> 0.00264 ETH</em></p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c34efe86.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '7196f021bcc541929d68b9bd0c018ac3',
        title: 'How Aggregators Reduce Gas Costs for Users',
        content: '<div class="bloc1"><p>Trade splitting would result in more transaction fees from the extra on-chain activity, except that advanced aggregators plan for transaction fees and include them in their calculations of the trade route. They simulate trades off chain, including <code>gas</code> costs, to find <code>trade routes</code> that leave Explorers with the most value at the end of the interaction.</p><p>Some aggregators go even further: they may refund some of the network transaction fees from using their protocol. 1inch currently offers rebates in their token for a portion of gas costs from trading through their <code>dApp</code> on Ethereum mainnet.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-28d6f207.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '2cf155ee9e3a4d4fb0a9c78f888d2373',
        title: '✅ Question',
        quiz: {
          question: 'Which of the following is NOT a way DEX aggregators try to reduce transaction costs for users?',
          rightAnswerNumber: 2,
          answers: [
            'Simulate transactions off-chain prior to trade execution',
            'Ask DEXs to lower network fees for their users',
            'Account for gas cost in trade routing',
            'Token rebates on gas costs'
          ],
          id: 'dex-aggregators-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '19eb7c5516fd4da383c48661d21e34a1',
        title: 'Meta-Aggregators',
        content: '<div class="bloc1"><p>There are even meta-aggregators of DEX aggregators! These platforms search through all competing DEX aggregators and serve price quotes to users. An example of this is the in-app swap function in the MetaMask wallet. This feature is actually a meta-aggregator that relies on DEX aggregators like 1inch to function.</p><p>Note: While convenient, <code>meta-aggregator</code> services can add extra costs on top of network transaction fees, increasing the overall cost for users. Explorers: make sure that your trades don’t end up more expensive than you intended. </p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/meta-aggregators-100793fd.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '7abcec930d924ca997d5f4221fae9ad6',
        title: '✅ Question',
        quiz: {
          question: 'Meta-aggregators cross-reference multiple DEX aggregators to find the best prices for their users.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          id: 'dex-aggregators-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '44acd0c428aa49e8880b26f1ffffd0b0',
        title: 'Avoiding Sandwich Attacks',
        content: '<div class="bloc1"><p>Users swapping directly through <code>DEXs</code> can lose value up to the limit of their <code>slippage tolerance</code> due to price changes coordinated by block producers — these kinds of losses are called <code>sandwich attacks</code>. Did you know that sandwich attacks led users to a total loss of $235,000,000 during 2021? Explorers can protect themselves by keeping a low slippage tolerance when swapping tokens.</p><p>Fortunately, because of the recombined liquidity offered by DEX aggregators, the price impact of a trade is reduced. Explorers can keep their slippage tolerance low while saving more with DEX aggregators, as opposed to trading directly on a DEX.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/avoiding-sandwich-attacks-75f6ae82.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9864a66638a3473ca13f8ee2dc8c4b1f',
        title: '✅ Question',
        quiz: {
          question: 'To protect yourself, you should keep your slippage tolerance:',
          rightAnswerNumber: 1,
          answers: [
            'low',
            'high'
          ],
          id: 'dex-aggregators-6'
        }
      },
      {
        type: 'LEARN',
        notionId: 'b1756984326242d4ad5e4ab2cbe2eb32',
        title: 'More Protection From Sandwiches: OTC Trades',
        content: '<div class="bloc1"><p>Some aggregators like 1inch even offer specialized <code>OTC</code> (<code>Over The Counter</code>) services that provide total protection against sandwich attacks. These optional services enable direct trading with other users, rather than facilitating trades through DeFi <code>liquidity pools</code>. Anyone can engage in <code>OTC</code> trades to fully remove the threat of sandwich attacks — providing another great way for Explorers to save.</p><p>CoWSwap is a Meta-Aggregator that also offers sandwich-resistant services, enabled by default, to ensure trades are 100% protected against sandwich attacks.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/more-protection-from-sandwiches-otc-trades-04ef66c9.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '18f1f2c0e7b84cfbafe1b26e139f0c25',
        title: '✅ Question',
        quiz: {
          question: 'Many DEX aggregators offer which tool(s) to save their users money?',
          rightAnswerNumber: 4,
          answers: [
            'Routing trades through aggregated liquidity from multiple DEXs to reduce price impact.',
            'OTC trades that fully protect against sandwich attacks.',
            'Account for gas cost when building the best trade routes.',
            'All of the above'
          ],
          id: 'dex-aggregators-7'
        }
      },
      {
        type: 'QUEST',
        title: 'DEX Aggregators Quest',
        component: 'DEXAggregators'
      },
      {
        type: 'END',
        title: 'Lesson Reward'
      }
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
