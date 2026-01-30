import { api } from './api';

export const uploadImage = async(file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    
    // За FormData трябва да премахнем глобалния Content-Type header
    // Браузърът автоматично задава правилния header с boundary
    const response = await api.post("/cars/upload-image", formData, {
        headers: {
            'Content-Type': undefined, // Премахни глобалния JSON header
        }
    });
    
    // Ако backend връща обект с url, използвай response.data.url или response.data.imageUrl
    // Ако връща директно string, използвай response.data
    return typeof response.data === 'string' ? response.data : response.data.url || response.data.imageUrl || response.data;
}
