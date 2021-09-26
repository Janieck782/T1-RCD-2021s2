package com.model;

import java.io.Serializable;
import java.util.List;

public class SplitterResponseModel implements Serializable {
    private class Apellidos implements Serializable {
        private String paterno, materno;

        public Apellidos(String paterno, String materno) {
            super();
            this.paterno = paterno;
            this.materno = materno;
        }

        public String getPaterno() {
            return paterno;
        }

        public void setPaterno(String paterno) {
            this.paterno = paterno;
        }

        public String getMaterno() {
            return materno;
        }

        public void setMaterno(String materno) {
            this.materno = materno;
        }
    }

    private List<String> nombres;
    private Apellidos apellidos;


    public SplitterResponseModel(List<String> nombres, String paterno, String materno) {
        super();
        this.nombres = nombres;
        this.apellidos = new Apellidos(paterno, materno);
    }

    public List<String> getNombres() {
        return nombres;
    }

    public void setNombres(List<String> nombres) {
        this.nombres = nombres;
    }

    public Apellidos getApellidos() {
        return apellidos;
    }

    public void setApellidos(Apellidos apellidos) {
        this.apellidos = apellidos;
    }
}
