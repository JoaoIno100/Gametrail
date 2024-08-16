package seguranca

import "golang.org/x/crypto/bcrypt"

//Hash recebe uma string e coloca um hash nela
func Hash(senha string) ([]byte, error) {
	return bcrypt.GenerateFromPassword([]byte(senha), bcrypt.DefaultCost)
}

//Verificar senha compara uma senha e uma hash e retorna se elas são iguais
func VerificarSenha(senha, senhaComHash string) error {
	return bcrypt.CompareHashAndPassword([]byte(senha), []byte(senhaComHash))
}
