import { Routes, Route } from "react-router-dom";
import Profil from "./Profil_Yahya";

function App() {
  return (
    <Routes>
      <Route
        path="/yahya"
        element={
          <Profil
            nama="Yahya"
            kelas="T2D"
            prodi="Teknolosi Informasi"
            domisili="Ngawi"
            deskripsi="Saya adalah mahasiswa yang memiliki minat di bidang teknologi dan pengembangan web..."
          />
        }
      />
    </Routes>
  );
}

export default App;