import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideos } from './routes/upload-videos';
import { createTranscriptions } from './routes/create-transcriptions';
import { generateAiCompletion } from './routes/generate-ai-completion';

export const app = fastify();

app.register(fastifyCors,{
  origin: '*',
  
})
app.register(getAllPromptsRoute)
app.register(uploadVideos)
app.register(createTranscriptions)
app.register(generateAiCompletion)



app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP Server Running...🚀')
})