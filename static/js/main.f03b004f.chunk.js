(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),l=a(8),s=a.n(l),o=a(16),u=a(2),m=a(3),d=a(5),p=a(4),v=a(6),h=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onFormSubmit(a.state.term)},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("form",{onSubmit:this.onFormSubmit},i.a.createElement("div",{className:"ui fluid action input"},i.a.createElement("input",{type:"text",placeholder:"Search...",onChange:function(t){return e.setState({term:t.target.value})},value:this.state.term}),i.a.createElement("button",{className:"ui button red"},"Search")))}}]),t}(i.a.Component),b=function(e){var t=e.video;return null!=t?i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:t.snippet.title,width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(t.id.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h3",null,t?t.snippet.title:""),i.a.createElement("p",null,t?t.snippet.description:""))):""},f=function(e){var t=e.video,a=e.onVideoSelect;return console.log(t),i.a.createElement("div",{className:"item",style:{display:"flex",width:"400px",cursor:"pointer"},onClick:function(){return a(t)}},i.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:"video thumbnail",style:{width:"180px",height:"100px"}}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t?t.snippet.title:""),i.a.createElement("div",{className:"description"},t?t.snippet.channelTitle:""),i.a.createElement("br",null),i.a.createElement("div",{className:"description"},"20343 Views")))},E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e,t){return i.a.createElement(f,{key:t,video:e,onVideoSelect:a})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},y=a(17),S=a.n(y).a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{part:"snippet",maxResults:10,key:"AIzaSyDWPtvLyIvEz6izF0N0Rs6AS9ppjhjnDtM"}}),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:null},a.onTermSubmit=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/search",{params:{q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui container",style:{marginTop:"30px"}},i.a.createElement(h,{onFormSubmit:this.onTermSubmit}),i.a.createElement("p",null,this.state.videos.length," Videos"),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ten wide column"},i.a.createElement(b,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"four wide column"},i.a.createElement(E,{videos:this.state.videos,onVideoSelect:this.onVideoSelect}))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(w,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f03b004f.chunk.js.map