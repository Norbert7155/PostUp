PostUp 🚀🚀🚀

Uwaga 📢📢: Aplikacja jest w fazie rozwoju – jej funkcjonalności oraz interfejs API mogą ulec zmianie.⚠️⚠️

PostUp to aplikacja społecznościowa, która umożliwia użytkownikom rejestrację, tworzenie, edycję oraz usuwanie postów. 💻
BackEnd została zbudowana przy użyciu Java oraz Spring Boot, a do obsługi bazy danych wykorzystuje Spring JDBC oraz MySQL uruchomiony w kontenerze Docker 🐳.
FrontEnd został stworzony przy użyciu React.js z TypeScriptem. Do stylowania aplikacji została użyta biblioteka StyledComponents. 🌐

Funkcjonalności 🛠️⚙️🔧

  Rejestracja i logowanie użytkowników:💡
    Użytkownicy mogą się rejestrować, logować, a następnie korzystać z pełni funkcji serwisu.

  Obsługa postów:💡
    -Tworzenie nowych postów
    -Edycja istniejących postów
    -Usuwanie postów
    -Przeglądanie listy wszystkich postów
    -Przeglądanie postów konkretnego użytkownika

Backend REST API:💡
  Aplikacja wystawia zestaw endpointów REST, dzięki którym front-end (np. aplikacja React 💻) może komunikować się z serwerem.

Technologie 🔧⚙️🚀
  -Java
  -Spring Boot – ułatwiający tworzenie i konfigurację aplikacji
  -Spring JDBC – do komunikacji z bazą danych
  -MySQL – baza danych - dostęp do niej uzyskujemy za pomocą Dockera 🐳
  -Docker – konteneryzacja bazy danych 🐳
  -React – Front-end do pobierania i wyświetlania danych, korzystający z REST API


Endpointy REST API 🌐🚀
  Posty: 📝📝
    -GET /post – pobiera listę wszystkich postów🔍
    -GET /post/{id} – pobiera szczegóły konkretnego posta
    -POST /post – tworzy nowy post
    -PUT /post/{id} – aktualizuje post o wskazanym ID
    -DELETE /post/{id} – usuwa post o wskazanym ID
  Użytkownicy: 👤👤
    -GET /user – pobiera listę wszystkich użytkowników🔍
    -GET /user/id/{id} – pobiera użytkownika po ID
    -GET /user/username/{username} – pobiera użytkownika po nazwie
    -POST /user – tworzy nowego użytkownika (rejestracja)
    -PUT /user/{id} – aktualizuje dane użytkownika
    -DELETE /user/{id} – usuwa użytkownika
    -GET /user/{userId}/post – pobiera wszystkie posty danego użytkownika🔍


