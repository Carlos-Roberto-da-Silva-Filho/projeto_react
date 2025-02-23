import { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import './Comentarios.css';

const Comentarios = () => {
    const [dados, setDados] = useState([]);
    const [nomeSelecionado, setNomeSelecionado] = useState('');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');
    const [email, setEmail] = useState('');
    const [comentario, setComentario] = useState('');
    const [erro, setErro] = useState('');
    const [exibirAlerta, setExibirAlerta] = useState(false);

    useEffect(() => {
        fetch('https://api.npoint.io/df8ddb710770ddbfae8a')
            .then(response => response.json())
            .then(dados => {
                setDados(dados);
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, []);

    const handleNomeChange = (e) => {
        const nome = e.target.value;
        setNomeSelecionado(nome);
        const usuario = dados.find(dado => dado.nome === nome);
        setCidadeSelecionada(usuario ? usuario.cidade : '');
    };

    const validarEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) && email.endsWith('@al.infnet.edu.br');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validarEmail(email)) {
            setErro('O e-mail precisa ser institucional (@al.infnet.edu.br).');
            return;
        }

        if (comentario.length < 20) {
            setErro('O comentário deve ter pelo menos 20 caracteres.');
            return;
        }

        setErro('');
        setExibirAlerta(true);

        setTimeout(() => {
            setExibirAlerta(false);
        }, 5000);
    };

    return (
        <Container className="comentarios-container">
            <div className="comentarios-form">
                <h2>Comentários</h2>
                {erro && <Alert color="danger" className="erro-centralizado">{erro}</Alert>}
                {exibirAlerta && (
                    <div className="alert-custom">
                        <p>Olá {nomeSelecionado}</p>
                        <p>Registramos e agradecemos o seu comentário!</p>
                        <p>Daremos retorno o mais breve possível.</p>
                    </div>
                )}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="nome">Nome</Label>
                        <Input type="select" id="nome" value={nomeSelecionado} onChange={handleNomeChange} required>
                            <option value="">Selecione um nome</option>
                            {dados.map((dado, index) => (
                                <option key={index} value={dado.nome}>{dado.nome}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="cidade">Cidade</Label>
                        <Input type="text" id="cidade" value={cidadeSelecionada} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="comentario">Comentário</Label>
                        <Input
                            type="textarea"
                            id="comentario"
                            value={comentario}
                            onChange={(e) => setComentario(e.target.value)}
                            placeholder="Digite seu comentário aqui... (mínimo 20 caracteres)"
                            required
                        />
                        <p className="contador-caracteres">{comentario.length}/20</p>
                    </FormGroup>
                    <Button type="submit" color="dark">Enviar</Button>
                </Form>
            </div>
        </Container>
    );
};

export default Comentarios;
