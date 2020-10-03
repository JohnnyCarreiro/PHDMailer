interface IParams{
    name:string
    email:string
    whatsapp:string
    id?:string
}
const emailBody = {
        clients(name:string, type:number){
             const client1 = `<p> Olá ${name}, tudo bem? <br><br> Gostaríamos de agradecer pelo contato, em breve você receberá nossa apresentação. E nos próximos dias um de nossos representantes entrará em contato contigo para que possamos nos conhecer melhor! <br> Lembrando que você pode entrar em contato diretamente atravéz de nosso whatsApp: (12) 9 9669-2580. <br><br> Att, Equipe da PHD Representações <p>`
             const client2 = `<p> Olá ${name}, tudo bem? <br><br> Vimos que você já entrou em contato conosco anteriormente, aguardade mais um pouco que entraremos em contato contigo.<br> Se preferir pode entrar em contato diretamente atravéz de nosso whatsApp: (12) 9 9669-2580.<br><br> att, Equipe PHD Representações`
             if(type === 1) return client1
             if(type === 2) return client2
        },
        team(params:IParams, type:number){
            
            const team1 = `Recebemos um novo contato em nosso site, seguem os dados do cliente: <br><br>ID: ${params.id}<br> Name: ${params.name}<br> Email: ${params.email}<br> whatsApp: ${params.whatsapp}<br>`
            const team2 = `<p>O cliente, ${params.name}, entrou em contato novamente pelo site, ver se o mesmo já recebeu nossa apresentação, caso contrário enviar com urgencia.<br> Dados do cliente para verificação:<br>ID: ${params.id}<br> Name: ${params.name}<br> Email: ${params.email}<br> whatsApp: ${params.whatsapp}<br><p>`
            if(type === 1) return team1
            if(type === 2) return team2
        }
}
export default emailBody