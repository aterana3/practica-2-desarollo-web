import { useState } from 'react'
import './assets/styles/App.css'

function App() {
  // Estados para los campos del formulario
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: ''
  });

  // Estados para los errores
  const [errors, setErrors] = useState({});

  // Estados para validación en tiempo real
  const [touched, setTouched] = useState({});

  // Función para validar email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para validar la contraseña
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // Función para validar el nombre
  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  // Función para validar en tiempo real
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'full_name':
        if (!value.trim()) {
          error = 'El nombre es obligatorio';
        } else if (!validateName(value)) {
          error = 'El nombre debe tener al menos 2 caracteres';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'El email es obligatorio';
        } else if (!validateEmail(value)) {
          error = 'Ingresa un email electrónico válido';
        }
        break;
      case 'password':
        if (!value) {
          error = 'La contraseña es obligatoria';
        } else if (!validatePassword(value)) {
          error = 'La contraseña debe tener al menos 8 caracteres';
        }
        break;
      default:
        break;
    }

    return error;
  };

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validar en tiempo real si el campo ya fue tocado
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  // Manejar cuando se pierde el foco (blur)
  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Validar todo el formulario
  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setTouched({
      full_name: true,
      email: true,
      password: true
    });

    return Object.keys(newErrors).length === 0;
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('¡Formulario enviado correctamente!\n\n' +
            `Nombre: ${formData.full_name}\n` +
            `Correo: ${formData.email}\n` +
            `Contraseña: ${'*'.repeat(formData.password.length)}`);

      // Reiniciar formulario
      setFormData({
        full_name: '',
        email: '',
        password: ''
      });
      setErrors({});
      setTouched({});
    }
  };

  // Verificar si el formulario es válido
  const isFormValid = () => {
    return Object.keys(formData).every(key => {
      const error = validateField(key, formData[key]);
      return !error && formData[key].trim();
    });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="container form-barcelona p-4">
            <h2 className="text-barcelona text-center mb-4 fw-bold">Registro de Usuario</h2>

            <form onSubmit={handleSubmit} noValidate>
              {/* Campo Nombre */}
              <div className="mb-3">
                <label htmlFor="full_name" className="form-label fw-semibold text-barcelona-dark">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  className={`form-control ${
                    touched.full_name 
                      ? errors.full_name 
                        ? 'is-invalid' 
                        : formData.full_name ? 'is-valid' : ''
                      : ''
                  }`}
                  value={formData.full_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Ingresa tu nombre completo"
                />
                {errors.full_name && (
                  <div className="invalid-feedback d-block">{errors.full_name}</div>
                )}
                {!errors.full_name && formData.full_name && touched.full_name && (
                  <div className="success-message">✓ Nombre válido</div>
                )}
              </div>

              {/* Campo Correo */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold text-barcelona-dark">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${
                    touched.email 
                      ? errors.email 
                        ? 'is-invalid' 
                        : formData.email ? 'is-valid' : ''
                      : ''
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="ejemplo@email.com"
                />
                {errors.email && (
                  <div className="invalid-feedback d-block">{errors.email}</div>
                )}
                {!errors.email && formData.email && touched.email && (
                  <div className="success-message">✓ Correo válido</div>
                )}
              </div>

              {/* Campo Contraseña */}
              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-semibold text-barcelona-dark">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`form-control ${
                    touched.password 
                      ? errors.password 
                        ? 'is-invalid' 
                        : formData.password ? 'is-valid' : ''
                      : ''
                  }`}
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Mínimo 8 caracteres"
                />
                {errors.password && (
                  <div className="invalid-feedback d-block">{errors.password}</div>
                )}
                {!errors.password && formData.password && touched.password && (
                  <div className="success-message">✓ Contraseña válida</div>
                )}
              </div>

              {/* Botón de envío */}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={!isFormValid()}
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
