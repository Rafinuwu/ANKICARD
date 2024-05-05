function toggleEnvelope() {
    var envelope = document.getElementById('envelope');
    var content = document.getElementById('content');
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        envelope.style.display = 'none';
    } else {
        content.style.display = 'none';
        envelope.style.display = 'block';
    }
}
