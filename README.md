# William8421-github-api-task

## deutsch

### Voraussetzungen

- Node.js und npm (oder Yarn) installiert

### Installation

1. Klonen Sie das Repository: `git clone git@github.com:William8421/github-api-task.git`
2. Wechseln Sie zum Projektverzeichnis: `cd github-api-task`
3. Installieren Sie dependencies: `npm install` oder `yarn install`

## Ausführen der Anwendung

- Um die Anwendung zu starten, führen Sie den folgenden Befehl aus:

bash
### npm start

Die Anwendung ist unter http://localhost:3000 in Ihrem Webbrowser verfügbar.

## Styling und SCSS-Kompilierung
Wenn Sie das Styling dieser Anwendung anpassen möchten oder Änderungen an den SCSS-Dateien vornehmen möchten,
können Sie diesen Schritten folgen, um den SCSS-Code automatisch in CSS zu kompilieren:

Führen Sie den folgenden Befehl aus, um Änderungen in Ihren SCSS-Dateien zu überwachen und sie automatisch in CSS zu kompilieren:

### cd src/styles
### sass --watch App.scss:App.css

# App-Beschreibung

Wie angefordert habe ich die GitHub-Benutzernamensuch-App erstellt, die Informationen über den Benutzer zurückgibt, einschließlich (Benutzername, Name, Anzahl der Follower, Anzahl der Verfolgten und Anzahl der öffentlichen Repositories). Die App zeigt auch die Repositories des Benutzers mit dem Namen des Repositories, einer Beschreibung und der verwendeten Programmiersprache an.

Da die API Repositories in Seiten zurückgibt (jeweils 30 Repositories), habe ich am Ende der Seite einen Button hinzugefügt, der die nächsten 30 Repositories anzeigt. (Wenn Sie die Funktionalität des Buttons testen möchten, empfehle ich die Suche nach "defunkt", da er 107 Repositories hat).

Die App wurde mobil-first entwickelt und ist vollständig responsiv auf Mobilgeräten, Tablets, Desktops und großen Bildschirmen.

=========================

## English

## Prerequisites

- Node.js and npm (or Yarn) installed

### Installation

1. Clone the repository: `git clone git@github.com:William8421/github-api-task.git`
2. Change to the project directory: `cd github-api-task`
3. Install dependencies: `npm install` or `yarn install`

## Running the Application

- To start the application, run the following command:

bash
### npm start

The application will be accessible at http://localhost:3000 in your web browser.

## Styling and SCSS Compilation
If you'd like to customize the styling of this application or make changes to the SCSS files,
you can follow these steps to compile the SCSS code into CSS:

Run the following command to watch for changes in your SCSS files and automatically compile them into CSS:
### cd src/styles
### sass --watch App.scss:App.css

# App description
as requested I created the github username search App that returns information about the user including (username, name, numbers of followers, number of following and number of public repositories, and it shows the user repositories with  the name of the repository, description and language used.
since the api returns repositories in pages (30 repositories each) I added a button at the end of the page, that shows the next 30 repositories.
(if you would like to test the functionality of the button i suggest searching for "defunkt" as he has 107  repositories).

the app was created mobile first and fully responsive on (mobile, tablet,  disktop and wide disctops).