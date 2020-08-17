import { http } from './config'

export default {
    listar: () => {
        return http.get('posts')
    },
    save: (filme) => {
        return http.post('posts', filme)
    },
    delete:(id) =>{
        return http.delete('post', {data: id})
    },

}