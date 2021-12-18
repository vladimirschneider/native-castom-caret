import { ListsWidget } from './ui/lists-widgets/slot';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        paddingTop: 80,
        backgroundColor: 'var(--color-system-grey-light)'
      }}
    >
      <div
        style={{
          width: '40vw',
          borderRadius: '16px 16px 0 0',
          backgroundColor: 'white',
          padding: 40,
          boxShadow: '0 0 4px black'
        }}
      >
        <ListsWidget
          type="text"
          text="Fyodor Mikhailovich Dostoevsky[a] (UK: /ˌdɒstɔɪˈɛfski/,[1] US: /ˌdɒstəˈjɛfski, ˌdʌs-/;[2] Russian: Фёдор Михайлович Достоевский[b], tr. Fyódor Mikháylovich Dostoyévskiy, IPA: [ˈfʲɵdər mʲɪˈxajləvʲɪdʑ dəstɐˈjefskʲɪj] (About this soundlisten); 11 November 1821 – 9 February 1881[3][c]), sometimes transliterated as Dostoyevsky, was a Russian novelist, short story writer, essayist, and journalist. Dostoevsky's literary works explore the human condition in the troubled political, social, and spiritual atmospheres of 19th-century Russia, and engage with a variety of philosophical and religious themes. His most acclaimed novels include Crime and Punishment (1866), The Idiot (1869), Demons (1872), and The Brothers Karamazov (1880). Dostoevsky's body of works consists of 12 novels, four novellas, 16 short stories, and numerous other works. Many literary critics rate him as one of the greatest novelists in all of world literature, as multiple of his works are considered highly influential masterpieces.[4] His 1864 novella Notes from Underground is considered to be one of the first works of existentialist literature; this has resulted in Dostoevsky being looked upon as both a philosopher and theologian as well.[5]"
          users={[
            {
              coords: {
                x: 838,
                y: 160,
                height: 28
              },
              name: 'Ant'
            },
            {
              coords: {
                x: 720,
                y: 412,
                height: 28
              },
              name: 'Birman'
            },
            {
              coords: {
                x: 837,
                y: 268,
                height: 28
              },
              name: 'Hyena'
            },
            {
              coords: {
                x: 940,
                y: 556,
                height: 28
              },
              name: 'Mongrel'
            },
            {
              coords: {
                x: 782,
                y: 520,
                height: 28
              },
              name: 'Wombat'
            }
          ]}
        />
      </div>
    </div>
  );
};
