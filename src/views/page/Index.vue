<template>
  <div>

    <!--帖子列表开始-->
    <div class="col-md-9 topics-index main-col">
      <div class="panel panel-default">
        <div class="panel-heading">
          <ul class="list-inline topic-filter">
            <li><a href="/topics?filter=default" class="active">活跃</a></li>
            <li><a href="/topics?filter=excellent">精华</a></li>
            <li><a href="/topics?filter=vote">投票</a></li>
            <li><a href="/topics?filter=recent">最近</a></li>
            <li><a href="/topics?filter=noreply">零回复</a></li>
          </ul>
          <div class="clearfix"></div>
        </div>

        <div class="panel-body remove-padding-horizontal">
          <ul class="list-group row topic-list">
            <ContentList v-on:contentList="contentList">
              <li v-for="(item , index) in contentListData" class="list-group-item">
                <a href="/articles/1/content" tag="div" class="reply_count_area hidden-xs pull-right">
                  <div class="count_set">
                    <span class="count_of_votes" title="观看数">{{item.post_hits}}</span>
                    <span class="count_seperator">|</span>
                    <span class="count_of_replies" title="喜欢数">{{item.post_like}}</span>
                    <span class="count_seperator">|</span>
                    <abbr class="timeago">{{reText(item.published_time)}}</abbr>
                  </div>
                </a>
                <a v="user" href="aaa" tag="div" class="avatar pull-left">
                  <img src="/avatar/20200514/1a3d3e7e2aa39c77053b81c3ff51ea62.jpg" class="media-object img-thumbnail avatar avatar-middle">
                </a>
                <a href="/articles/aaa/content" tag="div" class="infos">
                  <div class="media-heading">
                    {{item.post_title}}
                  </div>
                </a>
              </li>
            </ContentList>
          </ul>
        </div>
      </div>
    </div>
    <!--帖子列表结束-->
  </div>
</template>

<script>
  export default {
    name: "Index",
    data(){
      return{
        contentListData :'',
      }
    },
    methods:{

      /**
       * 从子组件获取数据
       * @param data
       */
      contentList(data){
        console.log(data)
        this.contentListData = data

      },
      reText(content){
        var temp = content.replace(/<\/?.+?>/g, "");
        return temp.replace(/ /g, "");//result为得到后的内容
      }

    }
  }
</script>
