import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  it('Deve inserir dois comentários', () => {
    render(<PostComment />);

    const commentInput = screen.getByTestId('comment-input');
    const submitButton = screen.getByTestId('submit-button');

    // Primeiro comentário
    fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(submitButton);
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

    // Segundo comentário
    fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
    fireEvent.click(submitButton);
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();

    // Verifica se ambos os comentários estão presentes
    expect(screen.getAllByTestId('comment-item')).toHaveLength(2); 
  });
});