# Front-end TaskFlow

TaskFlow is a task management application built with React, TypeScript, and Chakra UI. It demonstrates a clean, feature‑based architecture and includes authentication, task creation, status updates, and deletion.

## ✨ Features

- **User authentication** – Login with mock credentials (`test@test.com` / `12345`)
- **Task management** – Create, update status, and delete tasks
- **Responsive UI** – Built with Chakra UI, supports light/dark mode
- **Persistent state** – Authentication token stored in `localStorage`
- **Mock API** – Simulated network delays for realistic feedback

## 🛠️ Tech Stack

- **React** 18+ with TypeScript
- **Vite** – fast development and builds
- **Chakra UI** – component library with dark mode support
- **React Query** – data fetching and cache management
- **React Router v6** – routing and navigation
- **React Icons** – icon set

## 🔐 Mock Login

Use the following credentials to log in:

- **Email** `test@test.com`
- **Password**: `12345`

All other credentials will trigger an error.

## 📦 Scripts

- `dev` - start Vite dev server
- `build` - TypeScript check + Vite build
- `preview` - preview production build
- `lint` - run ESLint (if configured)
-

## 📁 Project Structure

The project follows a **feature‑based architecture** for scalability and maintainability.
src/
├── app/ # Bootstrap and global providers
│ ├── providers.tsx # All context providers (Chakra, Query, Auth)
│ ├── App.tsx # Root component with router
│ └── main.tsx # DOM entry point
├── assets/ # Static files (CSS, images)
├── components/ # Reusable UI components
│ ├── ui/ # Atomic components (Button, Input, Badge, etc.)
│ └── layout/ # Structural components (RootLayout)
├── features/ # Business modules
│ ├── auth/ # Authentication feature
│ │ ├── api/ # Auth API calls (login)
│ │ ├── components/ # LoginForm, LogoutButton
│ │ ├── hooks/ # useAuth (context consumer)
│ │ ├── context/ # AuthContext and provider
│ │ └── types/ # Auth‑related TypeScript types
│ └── tasks/ # Tasks feature
│ ├── api/ # Tasks API (CRUD)
│ ├── components/ # TaskForm, TaskItem, TaskList
│ ├── hooks/ # useTasks (React Query logic)
│ └── types/ # Task types and status helpers
├── pages/ # Page components (used by router)
│ ├── DashboardPage.tsx
│ └── LoginPage.tsx
├── routes/ # Router configuration
│ └── index.tsx
├── lib/ # Library configurations (axios, etc.)
├── utils/ # Pure helper functions
└── types/ # Global TypeScript types (if any)

## 👤 Author

Chris Corcinschi

- **GitHub:** @Chriscorcinschi

## ITA:

# Front-end TaskFlow

TaskFlow è un'applicazione di gestione delle attività creata con React, TypeScript e Chakra UI. Rappresenta un'architettura pulita, basata su feature‑ e include autenticazione, creazione di attività, aggiornamenti di stato ed eliminazione.

## ✨ Caratteristiche

- **Autenticazione utente** – Accedi con credenziali fittizie (`test@test.com` / `12345`)
- **Gestione delle attività** – Crea, aggiorna lo stato ed elimina le attività
- **Interfaccia utente reattiva** – Costruita con Chakra UI, supporta la modalità luce/buio
- **Stato persistente** – Token di autenticazione memorizzato in `localStorage`
- **API simulata** – Ritardi di rete simulati per un feedback realistico

## 🛠️ Stack tecnologico

- **React** 18+ con TypeScript
- **Vite** – sviluppo e build rapidi
- **Chakra UI** – libreria di componenti con supporto per la modalità scura
- **React Query** – recupero dati e gestione della cache
- **React Router v6** – routing e navigazione
- **Icone di reazione** – set di icone

## 🔐 Accesso simulato

Utilizza le seguenti credenziali per accedere:

- **E-mail** `test@test.com`
- **Password**: `12345`

Tutte le altre credenziali attiveranno un errore.

## 📦 Script

- `dev` - avvia il server di sviluppo Vite
- `build` - Controllo TypeScript + build Vite
- `preview` - anteprima della build di produzione
- `lint` - esegui ESLint (se configurato)

## 📁 Struttura del progetto

Il progetto segue un'architettura basata su **feature‑** per scalabilità e manutenibilità.
sorgente/
├── app/ # Bootstrap e fornitori globali
│ ├── provider.tsx # Tutti i provider di contesto (Chakra, Query, Auth)
│ ├── App.tsx # Componente root con router
│ └── main.tsx # Punto di ingresso DOM
├── risorse/ # File statici (CSS, immagini)
├── componenti/ # Componenti UI riutilizzabili
│ ├── ui/ # Componenti atomici (pulsante, input, badge, ecc.)
│ └── layout/ # Componenti strutturali (RootLayout)
├── caratteristiche/ # Moduli aziendali
│ ├── auth/ # Funzione di autenticazione
│ │ ├── api/ # Autentica le chiamate API (accesso)
│ │ ├── componenti/ # Modulo di accesso, pulsante di disconnessione
│ │ ├── hooks/ # useAuth (consumatore di contesto)
│ │ ├── contesto/ # AuthContext e provider
│ │ └── tipi/ # Auth‑tipi TypeScript correlati
│ └── attività/ # Funzionalità attività
│ ├── api/ # API delle attività (CRUD)
│ ├── componenti/ # TaskForm, TaskItem, TaskList
│ ├── hooks/ # useTasks (logica React Query)
│ └── tipi/ # Tipi di attività e aiutanti di stato
├── pagine/ # Componenti della pagina (utilizzati dal router)
│ ├── DashboardPage.tsx
│ └── Pagina di accesso.tsx
├── percorsi/ # Configurazione del router
│ └── indice.tsx
├── lib/ # Configurazioni della libreria (assi, ecc.)
├── utils/ # Funzioni di supporto pure
└── tipi/ # Tipi TypeScript globali (se presenti)

## 👤 Autore

Chris Corcinschi

- **GitHub:** @Chriscorcinschi
