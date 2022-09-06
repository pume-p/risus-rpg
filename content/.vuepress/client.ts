import { defineClientConfig } from '@vuepress/client';
import {
	DiscordButton,
	DiscordButtons,
	DiscordEmbed,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordInteraction,
	DiscordMarkdown,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
	DiscordReaction,
	DiscordReactions,
	install as DiscordMessageComponents,
} from '@discord-message-components/vue';
//import DocsLink from './components/DocsLink.vue';
//import ResultingCode from './components/ResultingCode.vue';
import '@discord-message-components/vue/dist/style.css';

export default defineClientConfig({
	enhance({
		app
	}) {
		app.use(DiscordMessageComponents, {
			avatars: {
				djs: '/enlogo.png',
			},
			profiles: {
				user: {
					author: 'User',
					avatar: 'https://media.discordapp.net/attachments/356304198398115841/1016633827495510016/FOc7efI5_400x400.jpg',
				},
				bot: {
					author: 'Risus Bot',
					avatar: 'https://media.discordapp.net/attachments/356304198398115841/998813093960368200/4.png',
					bot: true,
				},
			},
		});

		app.component('DiscordButton', DiscordButton);
		app.component('DiscordButtons', DiscordButtons);
		app.component('DiscordEmbed', DiscordEmbed);
		app.component('DiscordEmbedField', DiscordEmbedField);
		app.component('DiscordEmbedFields', DiscordEmbedFields);
		app.component('DiscordInteraction', DiscordInteraction);
		app.component('DiscordMarkdown', DiscordMarkdown);
		app.component('DiscordMention', DiscordMention);
		app.component('DiscordMessage', DiscordMessage);
		app.component('DiscordMessages', DiscordMessages);
		app.component('DiscordReaction', DiscordReaction);
		app.component('DiscordReactions', DiscordReactions);

		//app.component('DocsLink', DocsLink);
		//app.component('ResultingCode', ResultingCode);
	}
});